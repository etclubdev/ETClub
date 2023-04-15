import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Upload } from "antd";
import React from "react";
import bannerApi from "../../../../api/bannerApi";
import FilesUploadComponent from "../../../../components/files-upload-component";

const EditBanner = () => {
  const [fileList, setFileList] = React.useState([]);
  const [image, setImage] = React.useState();
  const [form] = Form.useForm();
  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  const handleChangeImage = async ({ fileList: newFile }) => {
    setFileList(newFile);

    if (
      !newFile[newFile.length - 1].url &&
      !newFile[newFile.length - 1].preview
    ) {
      newFile[newFile.length - 1].preview = await getBase64(
        newFile[newFile.length - 1].originFileObj
      );
    }
    setImage(
      newFile[newFile.length - 1].url || newFile[newFile.length - 1].preview
    );
  };
  const fileOnChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    } else {
      setImage(null);
      alert("Please select a file.");
    }
  };

  return (
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
        <div>
          <input type='file' onChange={fileOnChange} />
        </div>
      </Form.Item>
      <Form.Item name='link' label='Link chuyển tiếp'>
        <Input></Input>
      </Form.Item>
      <Form.Item>
        <Button
          onClick={() => {
            form.validateFields().then((values) => {
              const data = new FormData();
              data.append("description", values.description);
              data.append("img", image);
              data.append("link", values.link);
              const check = bannerApi.addBanner(data);
              if (check) {
                alert("ADD SUCCESS!");
              }
            });
          }}
        >
          Tạo
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditBanner;
