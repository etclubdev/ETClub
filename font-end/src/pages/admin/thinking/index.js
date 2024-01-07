import React from "react";
import { Button, Col, Form, Input, Modal, Row, Table, Select, notification } from "antd";
import { columns } from "./render";
import { useNavigate } from "react-router-dom";
import feelingApi from "../../../api/feelingApi";
import uploadApi from '../../../api/basicInfoApi';
import { openNotification } from '../../../utils';
const HomePageAdmin = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [dataDetail, setDataDetail] = React.useState();
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [image, setImage] = React.useState();
  const [imageURL, setImageURL] = React.useState("");
  const [selectedDepartment, setSelectedDepartment] = React.useState(undefined)
  let objectURL = "";
  const showModal = async (stt) => {
    setIsModalOpen(true);
    const dataApiDetail = await feelingApi.getById(stt);
    setDataDetail(dataApiDetail?.result);
  };

  const handleOk = () => {

    setLoading(true)

    openNotification({ key: 'createNotfication', message: 'Đang tạo ....', type: 'info' });
    try {
      form.validateFields().then(async (values) => {

        let dataImage = "";
        if (imageURL.length > 0) {
          const dataUpload = new FormData();
          dataUpload.append("images", image)
          const cloudImage = await uploadApi.uploadImages(dataUpload);
          console.log(cloudImage)
          if (cloudImage) {
            alert('upload success')
          }
          dataImage = cloudImage?.data[0]?.url

        }
        const dataUpdated = await feelingApi.updateFeeling({
          id: dataDetail?._id,
          data: {
            quote: values.quote,
            author: values.author,
            avatar: imageURL.length > 0 ? dataImage : dataDetail?.avatar,
            department: selectedDepartment !== undefined ? selectedDepartment : values.department
          }
        })
        if (dataUpdated.result) {
          setLoading(false)
          openNotification({ key: 'successNotfication', message: 'Cập nhật cảm nghĩ thành công', duration: 2.5, type: 'success' });
          fetchFeeling();
          setIsModalOpen(false);
        }
      });
    } catch (error) {
      setLoading(false)
      openNotification({ key: 'failNotfication', message: 'Cập nhật cảm nghĩ thất bại: ' + error.message, duration: 2.5, type: 'error' });
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setDataDetail(undefined);
    setImageURL("");
  };
  const fetchFeeling = async () => {
    try {
      const dataApi = await feelingApi.getAll();

      setData(dataApi?.result);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (stt) => {
    await feelingApi.delFeeling(stt);
    await fetchFeeling();
  };
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
    fetchFeeling();

  }, []);
  React.useEffect(() => {
    form.setFieldsValue({
      quote: dataDetail?.quote,
      author: dataDetail?.author,
      department: dataDetail?.department
    });
  }, [dataDetail]);

  React.useEffect(() => {
    if (!isModalOpen) {
      setDataDetail(undefined)
      setImageURL("");
    }
  }, [isModalOpen])
  React.useEffect(() => {

    if (!loading) {

      notification.destroy('createNotfication');

    }
    return () => {
      notification.destroy('createNotification');
    };

  }, [loading]);
  return (
    <Row justify='center'>
      <Col
        style={{
          marginTop: "15px",
        }}
        span={20}
      >
        <h1 className='text-2xl font-bold'>Quản lý danh sách Cảm nghĩ</h1>
        <Row
          style={{
            display: "flex",
            justifyContent: "end",
            marginBottom: "10px",
          }}
        >
          <Button
            className='min-w-[200px] bg-green-400 text-white font-bold'
            onClick={() => navigate("/admin/feeling/edit")}
          >
            Tạo mới{" "}
          </Button>
        </Row>
        <Modal
          title='Chỉnh sửa cảm nghĩ'
          open={isModalOpen}
          confirmLoading={loading}
          onOk={handleOk}
          width={800}
          onCancel={handleCancel}
          okButtonProps={{ style: { background: 'green', minWidth: '150px' } }}
          okText={"Lưu"}
        >
          {dataDetail ? (
            <Form form={form}>
              <Form.Item
                name='quote'
                initialValue={dataDetail.quote}
                label='Quote'
              >
                <Input />
              </Form.Item>

              <Form.Item
                name='author'
                initialValue={dataDetail.author}
                label='Tác giả'
              >
                <Input></Input>
              </Form.Item>
              <Form.Item
                name='department'
                initialValue={dataDetail.department}
                label='Ban'
              >
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
                  <img
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "contain",
                    }}
                    src={
                      imageURL.length > 0
                        ? imageURL
                        : `${dataDetail.avatar}`
                    }
                    alt=''
                  />
                </div>
                <div>
                  <input type='file' onChange={fileOnChange} />
                </div>
              </Form.Item>
            </Form>
          ) : (
            <span>Loading ...</span>
          )}
        </Modal>
        <Table
          columns={columns(handleDelete, showModal)}
          loading={loading}
          rootClassName='table-admin'
          dataSource={data.length > 0 ? data : []}
        />
      </Col>
    </Row>
  );
};

export default HomePageAdmin;
