import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Upload } from "antd";
import React from "react";
import bannerApi from "../../../../api/bannerApi";

const EditBanner = () => {
  const [fileList, setFileList] = React.useState([]);
  const [form] = Form.useForm();
  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  console.log(fileList);
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
      <Form.Item name='index' label='STT'>
        <Input></Input>
      </Form.Item>
      <Form.Item name='description' label='Mô tả'>
        <Input></Input>
      </Form.Item>
      <Form.Item name='picture' label='Hình ảnh'>
        <Upload
          accept='image/*'
          fileList={fileList}
          action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
          onChange={handleChange}
          listType='picture-card'
        >
          <br />
          <div>
            <UploadOutlined />
            <div className='ant-upload-text'>Thêm hình ảnh</div>
          </div>
        </Upload>
      </Form.Item>
      <Form.Item name='link' label='Link chuyển tiếp'>
        <Input></Input>
      </Form.Item>
      <Form.Item>
        <Button
          onClick={() => {
            form.validateFields().then((values) => {
              console.log(values);
              bannerApi.addBanner({
                stt: values.index,
                description: values.description,
                img: values.picture,
                link: values.link,
              });
              console.log("add banner thành công");
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
