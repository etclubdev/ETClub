import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Upload } from "antd";
import React from "react";

const EditETNews = () => {
  const [fileList, setFileList] = React.useState([]);
  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  console.log(fileList);
  return (
    <Form
      style={{
        background: "#fff",
        padding: "40px",
        height: "100%",
      }}
    >
      <h3>Tạo ETNews</h3>
      <Form.Item name='index' label='STT'>
        <Input></Input>
      </Form.Item>
      <Form.Item name='title' label='Tiêu đề'>
        <Input></Input>
      </Form.Item>
      <Form.Item name='content' label='Nội dung'>
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
        <Button>Tạo</Button>
      </Form.Item>
    </Form>
  );
};

export default EditETNews;
