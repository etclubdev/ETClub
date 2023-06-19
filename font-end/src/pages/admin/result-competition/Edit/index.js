import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select } from "antd";
import React from "react";
import competitionApi from "../../../../api/competitionApi";
import FilesUploadComponent from "../../../../components/files-upload-component";
import EditorComponent from '../../../../components/Editor';
import competitionResult from '../../../../api/competitionResult';
const options = [
    {
        value: 'Đã diễn ra',
        label: 'Đã diễn ra'
    },
    {
        value: 'Sắp diễn ra',
        label: 'Sắp diễn ra'
    },
    {
        value: 'Đang diễn ra',
        label: 'Đang diễn ra'
    }
]
const EditCompetitionResults = () => {
    const [competitionIdSelected, setCompetitionSelected] = React.useState(undefined);
    const [dataCompetition, setDataCompetition] = React.useState();
    const [typeChoosed, setTypeChoosed] = React.useState();
    const [image, setImage] = React.useState();
    const [image1, setImage1] = React.useState();
    const [image2, setImage2] = React.useState();
    const [form] = Form.useForm();

    const fetchCompetitions = async () => {
        try {
            const dataApi = await competitionApi.getAllCompetition();
            setDataCompetition(dataApi?.data);
        } catch (error) {
            console.log(error);
        }
    };
    React.useEffect(() => {
        fetchCompetitions();
    }, []);
    const fileOnChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
        } else {
            setImage(null);
            alert("Please select a file.");
        }
    };
    const fileOnChange1 = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage1(file);
        } else {
            setImage1(null);
            alert("Please select a file.");
        }
    };
    const fileOnChange2 = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage2(file);
        } else {
            setImage2(null);
            alert("Please select a file.");
        }
    };

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
                                    value: item.id,
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
                        <input type='file' onChange={fileOnChange} />
                    </div>
                </Form.Item>}
                {typeChoosed === 1 && <Form.Item name='avt' label='Ảnh đại diện'>
                    <div>
                        <input type='file' onChange={fileOnChange1} />
                    </div>
                </Form.Item>}



                <Form.Item>
                    <Button
                        onClick={() => {
                            form.validateFields().then((values) => {
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
                                const data = new FormData();
                                data.append("competition_id", competitionIdSelected);
                                data.append("name", values.name);
                                data.append("major", values.major);
                                data.append("academic_year", values.academic_year);
                                data.append("team", values.team)
                                data.append("rank", values.rank)
                                data.append("school", values.school)
                                data.append("type", typeChoosed)
                                data.append("logo_team", image);
                                data.append("avt", image1);


                                const check = competitionResult.addCompetitionResult(data);
                                if (check) {
                                    alert("ADD SUCCESS!");
                                    form.resetFields()
                                    setImage(undefined)
                                    setImage1(undefined)
                                    setTypeChoosed(undefined)
                                    setCompetitionSelected(undefined)

                                }
                            });
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
