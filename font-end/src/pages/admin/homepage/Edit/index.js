import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Upload, notification } from "antd";
import React from "react";
import bannerApi from "../../../../api/bannerApi";
import FilesUploadComponent from "../../../../components/files-upload-component";
import uploadApi from '../../../../api/basicInfoApi';
import { openNotification } from '../../../../utils';
import { useNavigate } from 'react-router-dom'
const EditBanner = () => {
  const [image, setImage] = React.useState();
  const [form] = Form.useForm();
  const [imageURL, setImageURL] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate()
  let objectURL = ""

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
        <h3>Tạo banner</h3>
        <Form.Item name='description' label='Mô tả'>
          <Input></Input>
        </Form.Item>
        <Form.Item name='picture' label='Hình ảnh'>
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
        </Form.Item>
        <Form.Item name='link' label='Link chuyển tiếp'>
          <Input></Input>
        </Form.Item>

        <Form.Item>
          <Button
            disabled={loading}
            loading={loading}
            onClick={() => {
              try {
                setLoading(true)

                openNotification({ key: 'createNotfication', message: 'Đang tạo ....', type: 'info' });
                form.validateFields().then(async (values) => {
                  if (!image) {
                    alert('Vui lòng chọn ảnh banner')
                    return null;
                  }
                  if (!values.link) {
                    alert('Vui lòng điền link liên kết')
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

                  const check = await bannerApi.addBanner({
                    link: values.link,
                    description: values.description,
                    img: imageData,
                  });
                  if (check.result) {
                    setLoading(false)
                    openNotification({ key: 'successNotfication', message: 'Thêm banner thành công', duration: 2.5, type: 'success' });
                    form.resetFields();
                    setImage(undefined)
                    setImageURL("")
                    navigate("/admin")
                  }

                });
              } catch (error) {
                setLoading(false)
                openNotification({ key: 'failNotfication', message: 'Thêm banner thất bại: ' + error.message, duration: 2.5, type: 'error' });
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

export default EditBanner;
