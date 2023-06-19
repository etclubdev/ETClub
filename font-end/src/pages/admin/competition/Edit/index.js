import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select } from "antd";
import React from "react";
import competitionApi from "../../../../api/competitionApi";
import FilesUploadComponent from "../../../../components/files-upload-component";
import EditorComponent from '../../../../components/Editor';
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
const EditCompetition = () => {

    const [valueRecap, setValueRecap] = React.useState();
    const [valueContent, setValueContent] = React.useState();
    const [image, setImage] = React.useState();
    const [image1, setImage1] = React.useState();
    const [image2, setImage2] = React.useState();
    const [form] = Form.useForm();

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
            <Form
                form={form}
                style={{
                    background: "#fff",
                    padding: "40px",
                    height: "100%",
                }}
            >
                <h3>Tạo cuộc thi</h3>
                <Form.Item name='name' label='Tên'>
                    <Input></Input>
                </Form.Item>
                <Form.Item name='status' label='Trạng thái'>
                    <Select options={options}></Select>
                </Form.Item>
                <Form.Item name='landscape_poster' label='Hình ngang'>
                    <div>
                        <input type='file' onChange={fileOnChange} />
                    </div>
                </Form.Item>
                <Form.Item name='portrait_poster' label='Hình dọc'>
                    <div>
                        <input type='file' onChange={fileOnChange1} />
                    </div>
                </Form.Item>
                {/* <Form.Item name='lookback_script' label='Recap'>
                    <Input></Input>
                </Form.Item> */}
                {/* <Form.Item name='lookback_img' label='Hình recap'>
                    <div>
                        <input type='file' onChange={fileOnChange2} />
                    </div>
                </Form.Item> */}
                <div>Mô tả</div>
                <div className=' w-full'>
                    <div className='' >
                        <EditorComponent setValue={setValueContent} />
                    </div>

                </div>
                <div>Recap</div>
                <div className=' w-full'>
                    <div className='' >
                        <EditorComponent setValue={setValueRecap} />
                    </div>

                </div>

                <Form.Item>
                    <Button
                        onClick={() => {
                            form.validateFields().then((values) => {
                                if (!values.status) {
                                    alert('Vui lòng chọn trạng thái')
                                    return null;
                                }
                                if (!values.name) {
                                    alert('Vui lòng điền tên cuộc thi')
                                    return null;
                                }
                                if (!image) {
                                    alert('Vui lòng chọn ảnh ngang')
                                    return null;
                                }
                                if (!image1) {
                                    alert('Vui lòng chọn ảnh dọc')
                                    return null;
                                }
                                const data = new FormData();
                                data.append("name", values.name);
                                data.append("status", values.status);
                                data.append("landscape_poster", image);
                                data.append("portrait_poster", image1);
                                data.append("lookback_script", valueRecap)
                                data.append("content", valueContent)
                                // data.append("lookback_script", values.lookback_script);
                                // data.append("lookback_img", image2);
                                const check = competitionApi.addCompetition(data);
                                if (check) {
                                    alert("ADD SUCCESS!");
                                    form.resetFields()
                                    setImage(undefined)
                                    setImage1(undefined)
                                    setValueRecap(undefined)
                                    setValueContent(undefined)
                                }
                            });
                        }}
                    >
                        Tạo
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default EditCompetition;
