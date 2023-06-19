
import { Button, Form, Input, Modal, Select, Upload } from "antd";
import React, { useState } from "react";

import EditorComponent from '../../../../components/Editor';
import etNewsApi from '../../../../api/etNewsApi';

const options = [
  {
    value: 0,
    label: 'Tất cả'
  },
  {
    value: 1,
    label: 'Tin chính phủ số'
  },
  {
    value: 2,
    label: 'Tin công nghệ thế giới'
  },
  {
    value: 3,
    label: 'Tin công nghệ Việt Nam'
  },
  {
    value: 4,
    label: 'Tin tạo sự ảnh hưởng'
  },
]
const EditETNews = () => {
  const [image, setImage] = React.useState();
  const [value, setValue] = useState('');
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
        <div className='flex justify-between mb-4'>
          <h3>Tạo ETNews</h3>
          <Button
            className='min-w-[150px] bg-blue-600 text-white font-bold hover:bg-gray-700 '
            onClick={() => {
              form.validateFields().then((values) => {

                const data = new FormData();
                data.append("name", values.name);
                data.append("image", image);
                data.append("link", values.link);
                data.append("tiny_desc", values.tiny_desc)
                data.append("full_news", value)
                data.append("category", values.category)
                const check = etNewsApi.add(data);

                if (check) {
                  alert("ADD SUCCESS!");
                }
              });
            }}
          >
            Tạo
          </Button>
        </div>
        <Form.Item name='name' label='Tiêu đề'>
          <Input></Input>
        </Form.Item>
        <Form.Item name='tiny_desc' label='Mô tả ngắn'>
          <Input></Input>
        </Form.Item>
        <Form.Item name='image' label='Ảnh bìa'>
          <div>
            <input type='file' onChange={fileOnChange} />
          </div>
        </Form.Item>
        <Form.Item name='link' label='Link chuyển tiếp'>
          <Input></Input>
        </Form.Item>
        <Form.Item name='category' label='Thể loại'>
          <Select options={options} >

          </Select>
        </Form.Item>
        <div>
          Nội dung
        </div>
        <div className=' w-full'>
          <div className='' >
            <EditorComponent setValue={setValue} />
          </div>

        </div>

        <div className=' py-[12px] px-[15px] text-[13px]' dangerouslySetInnerHTML={{ __html: value }}>

        </div>

      </Form>

    </>
  );
};

export default EditETNews;
