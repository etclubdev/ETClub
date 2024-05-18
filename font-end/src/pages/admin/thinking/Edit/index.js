import { Button, Form, Input, Select, notification } from "antd";
import React from "react";
import feelingApi from "../../../../api/feelingApi";
import uploadApi from '../../../../api/basicInfoApi';
import { openNotification } from '../../../../utils';
import { useNavigate } from 'react-router-dom'
import memberApi from '../../../../api/memberApi';
const EditBanner = () => {
  const [image, setImage] = React.useState();
  const [imageURL, setImageURL] = React.useState('');
  const [form] = Form.useForm();
  const [selectedDepartment, setSelectedDepartment] = React.useState(undefined);
  const [selectedMember, setSelectedMember] = React.useState(undefined);
  const [memberData, setMemberData] = React.useState(undefined);
  const [loading, setLoading] = React.useState(false);
  let objectURL = "";
  const navigate = useNavigate()
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
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await memberApi.getAll();
        if (data?.result) {
          setMemberData(data?.result)
        }
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])
  const handleSearch = (input, option) => {
    return option.label.toLowerCase().includes(input.toLowerCase());
  };
  console.log('selected', selectedMember)
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
          {/* <Input></Input> */}
          <Select
            value={selectedMember}
            showSearch
            filterOption={handleSearch}
            onChange={(_, option) => {
              setSelectedMember(option.label)
            }}
            options={memberData?.length > 0 ? memberData.map((item) => {
              return {
                value: item._id,
                label: item.name
              }
            }) : []}
          />
        </Form.Item>
        <Form.Item name='department' label='Ban'>
          <Select
            value={selectedDepartment}
            showSearch
            onChange={(e) => setSelectedDepartment(e)}
            options={[
              { value: 'Ban Tech', label: 'Ban Tech' },
              { value: 'Ban HR', label: 'Ban HR' },
              { value: 'Ban F-ER', label: 'Ban F-ER' },
              { value: 'Ban EC-PR', label: 'Ban EC-PR' },
              { value: 'Ban Event', label: 'Ban Event' }
            ]}
          />

        </Form.Item>
        <Form.Item name='avatar' label='Ảnh đại diện'>
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
        <Form.Item>
          <Button
            disabled={loading}
            loading={loading}
            onClick={() => {
              setLoading(true)

              openNotification({ key: 'createNotfication', message: 'Đang tạo ....', type: 'info' });
              try {
                form.validateFields().then(async (values) => {
                  if (!values.author) {
                    alert('Vui lòng điền tên tác giả')
                    return null;

                  }
                  if (!values.quote) {
                    alert('Vui lòng điền quote')
                    return null;

                  }
                  if (!selectedDepartment) {
                    alert('Vui lòng chọn ban')
                    return null;
                  }
                  if (!image) {
                    alert('Vui lòng chọn ảnh')
                    return null;

                  }

                  let imageData = ""
                  const dataUpload = new FormData();
                  dataUpload.append("images", image)
                  const cloudImage = await uploadApi.uploadImages(dataUpload);


                  imageData = cloudImage?.data[0]?.url

                  const check = await feelingApi.addFeeling({
                    quote: values.quote,
                    author: selectedMember,
                    department: selectedDepartment,
                    avatar: imageData
                  });
                  if (check.result) {
                    setLoading(false)
                    openNotification({ key: 'successNotfication', message: 'Thêm cảm nghĩ thành công', duration: 2.5, type: 'success' });
                    form.resetFields();
                    setImage(undefined)
                    setImageURL("")
                    navigate("/admin/feeling")
                  }
                });
              } catch (error) {
                setLoading(false)
                openNotification({ key: 'failNotfication', message: 'Thêm cảm nghĩ thất bại: ' + error.message, duration: 2.5, type: 'error' });
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
