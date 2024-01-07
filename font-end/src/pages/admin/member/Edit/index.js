import { Button, Form, Input, Select, notification } from "antd";
import React from "react";
import feelingApi from "../../../../api/feelingApi";
import uploadApi from '../../../../api/basicInfoApi';
import memberApi from '../../../../api/memberApi';
import { useNavigate } from 'react-router-dom'
import { openNotification } from '../../../../utils';
const EditMember = () => {
    const [image, setImage] = React.useState();
    const [imageURL, setImageURL] = React.useState('');
    const [form] = Form.useForm();
    const [selectedDepartment, setSelectedDepartment] = React.useState(undefined);
    const [dataTerms, setDataTerms] = React.useState(undefined);
    const [loading, setLoading] = React.useState(false);

    const navigate = useNavigate()
    let objectURL = "";
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
        const fetchData = async () => {
            const result = await memberApi.getAllTerms();
            setDataTerms(result?.result)
        }
        fetchData();
    }, [])
    React.useEffect(() => {

        if (!loading) {

            notification.destroy('createNotfication');

        }
        return () => {
            notification.destroy('createNotification');
        };

    }, [loading]);
    //fafa
    return (
        <>
            <Form
                form={form}
                style={{
                    background: "#fff",
                    padding: "40px",
                    height: "100%",
                }}
            >
                <h3>Tạo Thành viên</h3>
                <Form.Item name='name' label='Tên'>
                    <Input></Input>
                </Form.Item>

                <Form.Item name='department' label='Ban'>
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
                <Form.Item name='type' label='Vị trí'>
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
                {dataTerms?.length > 0 && <Form.Item name='terms' label='Nhiệm kỳ'>
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
                        {imageURL.length > 0 && <div>
                            <img
                                style={{
                                    width: "100%",
                                    height: "150px",
                                    objectFit: "contain",
                                }}
                                src={
                                    imageURL
                                }
                                alt=''
                            />
                        </div>}
                        <div>
                            <input type='file' onChange={fileOnChange} />
                        </div>
                    </div>
                </Form.Item>
                <Form.Item>
                    <Button
                        disabled={loading}
                        loading={loading}
                        onClick={() => {
                            setLoading(true)

                            openNotification({ key: 'createNotfication', message: 'Đang tạo ....', type: 'info' });
                            try {
                                form.validateFields().then(async (values) => {
                                    if (!values.name) {
                                        alert('Vui lòng điền tên tác giả')
                                        return null;

                                    }

                                    if (!values.terms) {
                                        alert('Vui lòng chọn nhiệm kỳ')
                                        return null;
                                    }
                                    if (!values.type) {
                                        alert('Vui lòng chọn vị trí')
                                        return null;
                                    }

                                    if (!selectedDepartment) {
                                        alert('Vui lòng chọn ban')
                                        return null;
                                    }


                                    let imageData = ""
                                    const dataUpload = new FormData();
                                    dataUpload.append("images", image)
                                    const cloudImage = await uploadApi.uploadImages(dataUpload);

                                    if (cloudImage) {
                                        openNotification({ key: 'uploadNotfication', message: 'Upload ảnh thành công!', duration: 2.5, type: 'success' });
                                    }
                                    imageData = cloudImage?.data[0]?.url

                                    const check = await memberApi.addMember({
                                        name: values.name,
                                        type: values.type,
                                        department: selectedDepartment,
                                        terms: values.terms,
                                        image: imageData
                                    });
                                    if (check.result) {
                                        setLoading(false)
                                        openNotification({ key: 'successNotfication', message: 'Thêm thành viên thành công', duration: 2.5, type: 'success' });
                                        form.resetFields();
                                        setImage(undefined)
                                        setImageURL("")
                                        navigate('/admin/member')
                                    }
                                });
                            } catch (error) {
                                setLoading(false)
                                openNotification({ key: 'failNotfication', message: 'Thêm thành viên thất bại: ' + error.message, duration: 2.5, type: 'error' });
                            }
                        }}
                    >
                        Tạo
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default EditMember;
