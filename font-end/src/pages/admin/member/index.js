import React from "react";
import { Button, Col, Form, Input, Modal, Row, Table, Select, notification } from "antd";
import { columns } from "./render";
import { useNavigate } from "react-router-dom";
import uploadApi from '../../../api/basicInfoApi';
import memberApi from '../../../api/memberApi';
import { openNotification } from '../../../utils';
const MemberAdmin = () => {
    const navigate = useNavigate();
    const [data, setData] = React.useState([]);
    const [dataDetail, setDataDetail] = React.useState();
    const [form] = Form.useForm();
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [image, setImage] = React.useState();
    const [imageURL, setImageURL] = React.useState("");
    const [selectedDepartment, setSelectedDepartment] = React.useState(undefined)
    const [dataTerms, setDataTerms] = React.useState(undefined);
    const [inputSearch, setInputSearch] = React.useState('');
    let objectURL = "";
    const showModal = async (stt) => {
        setIsModalOpen(true);
        const dataApiDetail = await memberApi.getById(stt);
        setDataDetail(dataApiDetail?.result);
    };

    const handleOk = () => {
        setLoading(true)

        openNotification({ key: 'createNotfication', message: 'Đang cập nhật ....', type: 'info' });

        try {
            form.validateFields().then(async (values) => {

                let dataImage = "";
                if (imageURL.length > 0) {
                    const dataUpload = new FormData();
                    dataUpload.append("images", image)
                    const cloudImage = await uploadApi.uploadImages(dataUpload);


                    dataImage = cloudImage?.data[0]?.url

                }
                const dataUpdated = await memberApi.updateMember({
                    id: dataDetail?._id,
                    data: {
                        name: values.name,
                        type: values.type,
                        terms: values.terms,
                        image: imageURL.length > 0 ? dataImage : dataDetail?.image,
                        department: selectedDepartment !== undefined ? selectedDepartment : values.department
                    }
                })
                if (dataUpdated.result) {
                    setLoading(false)
                    openNotification({ key: 'successNotfication', message: 'Chỉnh sửa thành viên thành công', duration: 2.5, type: 'success' });
                    setSelectedDepartment(undefined)
                    fetchMembers();
                    setIsModalOpen(false);

                }
            });
        } catch (error) {
            setLoading(false)
            openNotification({ key: 'failNotfication', message: 'Chỉnh sửa thành viên thất bại: ' + error.message, duration: 2.5, type: 'error' });
        }
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setDataDetail(undefined);
        setSelectedDepartment(undefined)
        setImageURL("");
    };
    const fetchMembers = React.useCallback(async (inputSearch, selectedDepartment) => {
        try {

            const dataApi = await memberApi.getAll({ name: inputSearch, department: selectedDepartment });

            setData(dataApi?.result);
        } catch (error) {
            console.log(error);
        }
    }, [inputSearch]);

    const handleDelete = async (stt) => {
        await memberApi.delMember(stt);
        await fetchMembers();
    };
    const fileOnChange = (event) => {
        const file = event.target.files[0];

        objectURL = URL.createObjectURL(file);
        setImageURL(objectURL);
        if (file) {
            setImage(file);
        } else {
            setImage(null);
            alert("Please select a file.");
        }
    };

    React.useEffect(() => {
        fetchMembers();
    }, []);
    React.useEffect(() => {
        const fetchData = async () => {
            const result = await memberApi.getAllTerms();
            setDataTerms(result?.result)
        }
        fetchData();
    }, [])
    React.useEffect(() => {
        form.setFieldsValue({
            name: dataDetail?.name,
            department: dataDetail?.department,
            terms: dataDetail?.terms,
            type: dataDetail?.type,
        });
    }, [dataDetail]);

    React.useEffect(() => {
        if (!isModalOpen) {
            setDataDetail(undefined)
            setImageURL("");
        }
    }, [isModalOpen])
    React.useEffect(() => {

        if (!loading) {

            notification.destroy('createNotfication');

        }
        return () => {
            notification.destroy('createNotification');
        };

    }, [loading]);
    const handleSearch = async () => {
        await fetchMembers(inputSearch, selectedDepartment);
    };

    const handleReload = async () => {
        setInputSearch(null);
        setSelectedDepartment(undefined);
        await fetchMembers(null, null)

    };
    return (
        <Row justify='center'>
            <Col
                style={{
                    marginTop: "15px",
                }}
                span={20}
            >
                <h1 className='text-2xl font-bold'>Quản lý danh sách Thành viên</h1>
                <Row
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "10px",
                    }}
                >
                    <div className='flex '>
                        <Input value={inputSearch} onChange={(e) => setInputSearch(e.target.value)} placeholder='Tìm kiếm theo tên' />
                        <div className='w-[300px] mx-[20px]'>
                            <Select
                                value={selectedDepartment}
                                placeholder='Tìm kiếm theo ban'
                                className='block'
                                onChange={e => setSelectedDepartment(e)}
                                showSearch
                                options={[
                                    { value: 0, label: 'Ban chủ nhiệm' },
                                    { value: 1, label: 'Ban Tài chính - Đối ngoại' },
                                    { value: 2, label: 'Ban Event' },
                                    { value: 3, label: 'Ban Nhân sự' },
                                    { value: 4, label: 'Ban Truyền thông' },
                                    { value: 5, label: 'Ban Kỹ thuật công nghệ' },
                                ]}
                            />

                        </div>
                        <Button
                            className='min-w-[100px] bg-blue-400 text-white font-bold'
                            onClick={handleSearch}
                        >
                            Tìm kiếm{" "}
                        </Button>
                        <Button
                            className='min-w-[100px] bg-blue-400 text-white font-bold ml-[20px]'
                            onClick={handleReload}
                        >
                            Reload{" "}
                        </Button>
                    </div>


                    <Button
                        className='min-w-[200px] bg-green-400 text-white font-bold'
                        onClick={() => navigate("/admin/member/edit")}
                    >
                        Tạo mới{" "}
                    </Button>
                </Row>
                <Modal
                    title='Chỉnh sửa thành viên'
                    open={isModalOpen}
                    onOk={handleOk}
                    width={800}
                    confirmLoading={loading}
                    onCancel={handleCancel}
                    okButtonProps={{ style: { background: 'green', minWidth: '150px' } }}
                    okText={"Lưu"}
                >
                    {dataDetail ? (
                        <Form form={form}>
                            <Form.Item initialValue={dataDetail.name} name='name' label='Tên'>
                                <Input></Input>
                            </Form.Item>

                            <Form.Item initialValue={dataDetail.department} name='department' label='Ban'>
                                <Select
                                    value={selectedDepartment}
                                    onChange={e => setSelectedDepartment(e)}
                                    showSearch
                                    mode='multiple'
                                    options={[
                                        { value: 0, label: 'Ban chủ nhiệm' },
                                        { value: 1, label: 'Ban Tài chính - Đối ngoại' },
                                        { value: 2, label: 'Ban Event' },
                                        { value: 3, label: 'Ban Nhân sự' },
                                        { value: 4, label: 'Ban Truyền thông' },
                                        { value: 5, label: 'Ban Kỹ thuật công nghệ' },
                                    ]}
                                />

                            </Form.Item>
                            <Form.Item initialValue={dataDetail.type} name='type' label='Vị trí'>
                                <Select
                                    showSearch
                                    mode='multiple'
                                    options={[
                                        { value: 3, label: 'Chủ nhiệm' },
                                        { value: 4, label: 'Phó chủ nhiệm' },
                                        { value: 5, label: 'Thành viên chủ nhiệm' },
                                        { value: 0, label: 'Trưởng ban' },
                                        { value: 1, label: 'Phó ban' },
                                        { value: 2, label: 'Thành viên' },

                                    ]}
                                />

                            </Form.Item>
                            {dataTerms?.length > 0 && <Form.Item initialValue={dataDetail.terms} name='terms' label='Nhiệm kỳ'>
                                <Select
                                    mode='multiple'
                                    options={[
                                        ...dataTerms?.map((item) => {
                                            return {
                                                value: item._id,
                                                label: item.name,
                                            };
                                        }),
                                    ]}
                                />
                            </Form.Item>}

                            <Form.Item name='image' label='Ảnh đại diện'>
                                <div>
                                    <img
                                        style={{
                                            width: "100%",
                                            height: "150px",
                                            objectFit: "contain",
                                        }}
                                        src={
                                            imageURL.length > 0
                                                ? imageURL
                                                : `${dataDetail.image}`
                                        }
                                        alt=''
                                    />
                                </div>
                                <div>
                                    <input type='file' onChange={fileOnChange} />
                                </div>
                            </Form.Item>
                        </Form>
                    ) : (
                        <span>Loading ...</span>
                    )}
                </Modal>
                <Table
                    columns={columns(handleDelete, showModal, dataTerms?.length > 0 ? dataTerms : [])}
                    loading={loading}
                    scroll={{ y: 620 }}

                    rootClassName='table-admin'
                    dataSource={data.length > 0 ? data : []}
                />
            </Col>
        </Row>
    );
};

export default MemberAdmin;
