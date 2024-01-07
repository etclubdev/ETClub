import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, DatePicker, notification } from "antd";
import React from "react";
import competitionApi from "../../../../api/competitionApi";
import FilesUploadComponent from "../../../../components/files-upload-component";
import EditorComponent from '../../../../components/Editor';
import uploadApi from '../../../../api/basicInfoApi';
import dayjs from 'dayjs';
import { openNotification } from '../../../../utils';
import { useNavigate } from 'react-router-dom'
const options = [
    {
        value: 2,
        label: 'Đã diễn ra'
    },
    {
        value: 0,
        label: 'Sắp diễn ra'
    },
    {
        value: 1,
        label: 'Đang diễn ra'
    }
]
const EditCompetition = () => {

    const [valueRecap, setValueRecap] = React.useState();
    const [valueContent, setValueContent] = React.useState();
    const [image, setImage] = React.useState();
    const [image1, setImage1] = React.useState();
    const [imageURLLanscape, setImageURLLanscape] = React.useState("");
    const [imageURLPortrait, setImageURLPortrait] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const fileOnChange = (event) => {
        const file = event.target.files[0];
        setImageURLLanscape(URL.createObjectURL(file));
        if (file) {
            setImage(file);
        } else {
            setImage(null);
            alert("Please select a file.");
        }
    };
    const fileOnChange1 = (event) => {
        const file = event.target.files[0];
        setImageURLPortrait(URL.createObjectURL(file));
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
                <Form.Item name='date' label='Ngày bắt đầu'>
                    <DatePicker format={"DD/MM/YYYY"} />
                </Form.Item>
                <Form.Item name='end_date' label='Ngày kết thúc'>
                    <DatePicker format={"DD/MM/YYYY"} />
                </Form.Item>
                <Form.Item name='status' label='Trạng thái'>
                    <Select options={options}></Select>
                </Form.Item>
                <Form.Item name='landscape_poster' label='Hình ngang'>

                    {imageURLLanscape.length > 0 && <div>
                        <img
                            style={{
                                width: "100%",
                                height: "150px",
                                objectFit: "contain",
                            }}
                            src={
                                imageURLLanscape
                            }
                            alt=''
                        />
                    </div>}
                    <div>
                        <input type='file' onChange={fileOnChange} />
                    </div>
                </Form.Item>
                <Form.Item name='portrait_poster' label='Hình dọc'>
                    {imageURLPortrait.length > 0 && <div>
                        <img
                            style={{
                                width: "100%",
                                height: "150px",
                                objectFit: "contain",
                            }}
                            src={
                                imageURLPortrait
                            }
                            alt=''
                        />
                    </div>}
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
                        disabled={loading}
                        loading={loading}
                        onClick={() => {
                            setLoading(true)

                            openNotification({ key: 'createNotfication', message: 'Đang tạo ....', type: 'info' });
                            try {
                                form.validateFields().then(async (values) => {
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

                                    let imageLandscapeData = ""
                                    const dataLandscapeUpload = new FormData();
                                    dataLandscapeUpload.append("images", image)
                                    const cloudLandscapeImage = await uploadApi.uploadImages(dataLandscapeUpload);


                                    imageLandscapeData = cloudLandscapeImage?.data[0]?.url
                                    let imagePortraitData = ""
                                    const dataPortraitUpload = new FormData();
                                    dataPortraitUpload.append("images", image1)
                                    const cloudPortraitImage = await uploadApi.uploadImages(dataPortraitUpload);


                                    imagePortraitData = cloudPortraitImage?.data[0]?.url

                                    const check = await competitionApi.addCompetition({
                                        name: values.name,
                                        status: values.status,
                                        landscape_poster: imageLandscapeData,
                                        portrait_poster: imagePortraitData,
                                        lookback_script: valueRecap,
                                        content: valueContent,
                                        date: dayjs(values.date, 'DD/MM/YYYY').format('YYYY-MM-DD'),
                                        end_date: values.end_date != null ? dayjs(values.end_date, 'DD/MM/YYYY').format('YYYY-MM-DD') : null,
                                    });
                                    if (check.result) {
                                        setLoading(false)
                                        openNotification({ key: 'successNotfication', message: 'Thêm cuộc thi thành công', duration: 2.5, type: 'success' });
                                        form.resetFields();
                                        setImage(undefined)
                                        setImage1(undefined)
                                        setValueRecap(undefined)
                                        setValueContent(undefined)
                                        setImageURLLanscape("")
                                        setImageURLPortrait("")
                                        navigate("/admin/competition");
                                    }

                                });
                            } catch (error) {
                                setLoading(false)
                                openNotification({ key: 'failNotfication', message: 'Thêm cuộc thi thất bại: ' + error.message, duration: 2.5, type: 'error' });
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

export default EditCompetition;
