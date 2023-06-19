import { Button, Form, Input } from "antd";
import React from "react";
import feelingApi from "../../../../api/feelingApi";

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
        <h3>Tạo Cảm nghĩ</h3>
        <Form.Item name='quote' label='Quote'>
          <Input></Input>
        </Form.Item>

        <Form.Item name='author' label='Tác giả'>
          <Input></Input>
        </Form.Item>
        <Form.Item name='department' label='Ban'>
          <Input></Input>
        </Form.Item>
        <Form.Item name='avatar' label='Ảnh đại diện'>
          <div>
            <input type='file' onChange={fileOnChange} />
          </div>
        </Form.Item>
        <Form.Item>
          <Button
            onClick={() => {
              form.validateFields().then((values) => {
                if (!values.author) {
                  alert('Vui lòng điền tên tác giả')
                  return null;

                }
                if (!values.quote) {
                  alert('Vui lòng điền quote')
                  return null;

                }
                if (!image) {
                  alert('Vui lòng chọn ảnh')
                  return null;

                }
                const data = new FormData();
                data.append("quote", values.quote);
                data.append("author", values.author);
                data.append("department", values.department);
                data.append("avatar", image);

                const check = feelingApi.addFeeling(data);
                if (check) {
                  alert("ADD SUCCESS!");
                  form.resetFields();
                  setImage(undefined)
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
