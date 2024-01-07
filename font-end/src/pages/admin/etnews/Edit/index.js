
import { Button, Form, Input, Modal, Select, Upload, notification } from "antd";
import React, { useState } from "react";

import EditorComponent from '../../../../components/Editor';
import etNewsApi from '../../../../api/etNewsApi';
import uploadApi from '../../../../api/basicInfoApi';
import { useNavigate } from "react-router-dom";
import { openNotification } from '../../../../utils';
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
  const [imageURL, setImageURL] = useState("")
  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();

  const fileOnChange = (event) => {
    const file = event.target.files[0];
    setImageURL(URL.createObjectURL(file))
    if (file) {
      setImage(file);
    } else {
      setImage(null);
      alert("Please select a file.");
    }
  };

  const handleCreate = async () => {
    try {
      setLoading(true)

      openNotification({ key: 'createNotfication', message: 'Đang tạo ....', type: 'info' });

      form.validateFields().then(async (values) => {
        let imageData = "";
        const dataUpload = new FormData();
        dataUpload.append("images", image);
        const cloudImage = await uploadApi.uploadImages(dataUpload);

        if (cloudImage) {
          openNotification({ key: 'uploadNotfication', message: 'Upload ảnh thành công!', duration: 2.5, type: 'success' });
        }
        imageData = cloudImage?.data[0]?.url;

        const check = await etNewsApi.add({
          name: values.name,
          image: imageData,
          link: values.link,
          tiny_desc: values.tiny_desc,
          full_news: value,
          category: values.category,
        });

        if (check.result) {

          setLoading(false)
          openNotification({ key: 'successNotfication', message: 'Thêm tin thành công', duration: 2.5, type: 'success' });
          form.resetFields();
          setImage(undefined);
          setImageURL("");
          setValue("");
          navigate("/admin/etnews");
        }

      });
    } catch (error) {
      setLoading(false)
      openNotification({ key: 'failNotfication', message: 'Thêm tin thất bại: ' + error.message, duration: 2.5, type: 'error' });
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
        <div className='flex justify-between mb-4'>
          <h3>Tạo ETNews</h3>
          <Button
            className='min-w-[150px] bg-blue-600 text-white font-bold hover:bg-gray-700 '
            onClick={handleCreate}
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
        {/* 
        <div className=' py-[12px] px-[15px] text-[13px]' dangerouslySetInnerHTML={{ __html: value }}>

        </div> */}

      </Form>

    </>
  );
};

export default EditETNews;
