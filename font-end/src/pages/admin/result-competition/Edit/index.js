import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, notification } from "antd";
import React from "react";
import competitionApi from "../../../../api/competitionApi";
import FilesUploadComponent from "../../../../components/files-upload-component";
import EditorComponent from '../../../../components/Editor';
import competitionResult from '../../../../api/competitionResult';
import uploadApi from '../../../../api/basicInfoApi';
import { useNavigate } from 'react-router-dom'
import { openNotification } from '../../../../utils';

const EditCompetitionResults = () => {
    const [competitionIdSelected, setCompetitionSelected] = React.useState(undefined);
    const [dataCompetition, setDataCompetition] = React.useState();
    const [typeChoosed, setTypeChoosed] = React.useState();
    const [image, setImage] = React.useState();
    const [image1, setImage1] = React.useState();
    const [imageURL, setImageURL] = React.useState("");
    const [imageTeamURL, setImageTeamURL] = React.useState("")
    const [form] = Form.useForm();
    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate()
    const fetchCompetitions = async () => {
        try {
            const dataApi = await competitionApi.getAllCompetition();
            setDataCompetition(dataApi?.result?.competitions);
        } catch (error) {
            console.log(error);
        }
    };
    React.useEffect(() => {
        fetchCompetitions();
    }, []);
    const fileOnChange = (event) => {
        const file = event.target.files[0];
        setImageTeamURL(URL.createObjectURL(file))
        if (file) {
            setImage(file);
        } else {
            setImage(null);
            alert("Please select a file.");
        }
    };
    const fileOnChange1 = (event) => {
        const file = event.target.files[0];
        setImageURL(URL.createObjectURL(file))
        if (file) {
            setImage1(file);
        } else {
            setImage1(null);
            alert("Please select a file.");
        }
    };
    React.useEffect(() => {

        if (!loading) {

            notification.destroy('createNotfication');

        }
        return () => {
            notification.destroy('createNotification');
        };

    }, [loading]);
    return (
        <>
            {dataCompetition ? <Form
                form={form}
                style={{
                    background: "#fff",
                    padding: "40px",
                    height: "100%",
                }}
            >
                <h3 className='text-2xl font-bold mb-[20px]'>Tạo kết quả cuộc thi</h3>
                <Form.Item name='name' label='Tên'>
                    <Input></Input>
                </Form.Item>
                <Form.Item name='competition_id' label='ID cuộc thi'>
                    <Select
                        value={competitionIdSelected}
                        onChange={(e) => setCompetitionSelected(e)}
                        options={[
                            ...dataCompetition?.map((item) => {
                                return {
                                    value: item._id,
                                    label: item.name,
                                };
                            }),
                        ]}
                    />
                </Form.Item>
                <Form.Item name='major' label='Ngành'>
                    <Input></Input>
                </Form.Item>
                <Form.Item name='academic_year' label='Khóa'>
                    <Input></Input>
                </Form.Item>
                <Form.Item name='team' label='Đội thi'>
                    <Input></Input>
                </Form.Item>
                <Form.Item name='rank' label='Xếp hạng'>
                    <Select options={[{
                        value: 1,
                        label: 'Giải nhất'
                    }, {
                        value: 2,
                        label: 'Giải nhì'
                    }, {
                        value: 3,
                        label: 'Giải ba'
                    }, {
                        value: 4,
                        label: 'Khuyến khích'
                    }]} >

                    </Select>
                </Form.Item>
                <Form.Item name='school' label='Trường'>
                    <Input></Input>
                </Form.Item>
                <Form.Item name='type' label='Loại'>
                    <Select onChange={(e) => setTypeChoosed(e)} value={typeChoosed} options={[{
                        value: 1,
                        label: 'Cá nhân'
                    }, {
                        value: 2,
                        label: 'Nhóm'
                    }]} >

                    </Select>
                </Form.Item>
                {typeChoosed === 2 && <Form.Item name='logo_team' label='Logo nhóm'>
                    <div>
                        {imageTeamURL.length > 0 && <div>
                            <img
                                style={{
                                    width: "100%",
                                    height: "150px",
                                    objectFit: "contain",
                                }}
                                src={
                                    imageTeamURL
                                }
                                alt=''
                            />
                        </div>}
                        <div>
                            <input type='file' onChange={fileOnChange} />
                        </div>
                    </div>
                </Form.Item>}
                {typeChoosed === 1 && <Form.Item name='avt' label='Ảnh đại diện'>
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
                            <input type='file' onChange={fileOnChange1} />
                        </div>
                    </div>
                </Form.Item>}



                <Form.Item>
                    <Button
                        disabled={loading}
                        loading={loading}
                        onClick={() => {

                            setLoading(true)

                            openNotification({ key: 'createNotfication', message: 'Đang tạo ....', type: 'info' });
                            try {
                                form.validateFields().then(async (values) => {
                                    if (!competitionIdSelected) {
                                        alert('Vui lòng chọn ID cuộc thi')
                                        return null;
                                    }
                                    if (!values.name) {
                                        alert('Vui lòng điền tên')
                                        return null;
                                    }
                                    if (!typeChoosed) {
                                        alert('Vui lòng chọn loại')
                                        return null;
                                    }
                                    if (!values.rank) {
                                        alert('Vui lòng chọn xếp hạng')
                                        return null;
                                    }
                                    let imageTeamData = ""
                                    if (imageTeamURL.length > 0) {
                                        const dataTeamUpload = new FormData();
                                        dataTeamUpload.append("images", image)
                                        const cloudTeamData = await uploadApi.uploadImages(dataTeamUpload);

                                        if (cloudTeamData) {
                                            alert('upload team image success')
                                        }
                                        imageTeamData = cloudTeamData?.data[0]?.url
                                    }
                                    let imageData = ""
                                    if (imageURL.length > 0) {
                                        const dataUpload = new FormData();
                                        dataUpload.append("images", image1)
                                        const cloudData = await uploadApi.uploadImages(dataUpload);

                                        if (cloudData) {
                                            alert('upload image success')
                                        }
                                        imageData = cloudData?.data[0]?.url
                                    }

                                    const check = await competitionResult.addCompetitionResult({
                                        competition_id: competitionIdSelected,
                                        name: values.name,
                                        major: values.major,
                                        academic_year: values.academic_year,
                                        team: values.team,
                                        rank: values.rank,
                                        school: values.school,
                                        type: typeChoosed,
                                        logo_team: imageTeamURL.length > 0 ? imageTeamData : null,
                                        avt: imageURL.length > 0 ? imageData : null
                                    });
                                    if (check?.result) {
                                        setLoading(false)
                                        openNotification({ key: 'successNotfication', message: 'Thêm kết quả cuộc thi thành công', duration: 2.5, type: 'success' });
                                        form.resetFields();
                                        setImage(undefined)
                                        setImage1(undefined)
                                        setTypeChoosed(undefined)
                                        setCompetitionSelected(undefined)
                                        navigate('/admin/competition-results')
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
            </Form> : <span>Loading....</span>}
        </>
    );
};

export default EditCompetitionResults;
