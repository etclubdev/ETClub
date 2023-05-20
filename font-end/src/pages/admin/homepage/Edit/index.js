import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Upload } from "antd";
import React from "react";
import bannerApi from "../../../../api/bannerApi";
import FilesUploadComponent from "../../../../components/files-upload-component";

const EditBanner = () => {
  const [image, setImage] = React.useState();
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
                console.log(check)
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
    </>
  );
};

export default EditBanner;
