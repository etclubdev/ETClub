import React from "react";
import { Button, Col, Form, Input, Modal, Row, Table, notification } from "antd";
import { columns } from "./render";
import { useNavigate } from "react-router-dom";
import bannerApi from "../../../api/bannerApi";
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
  let objectURL = "";
  const showModal = async (id) => {
    setIsModalOpen(true);
    const dataApiDetail = await bannerApi.getById(id);

    setDataDetail(dataApiDetail.result);
  };

  const handleOk = () => {

    try {
      setLoading(true)

      openNotification({ key: 'createNotfication', message: 'Đang cập nhật ....', type: 'info' });
      form.validateFields().then(async (values) => {
        let dataImage = "";
        if (imageURL.length > 0) {
          const dataUpload = new FormData();
          dataUpload.append("images", image)
          const cloudImage = await uploadApi.uploadImages(dataUpload);
          dataImage = cloudImage?.data[0]?.url

        }
        const dataUpdated = await bannerApi.updateBanner({
          id: dataDetail?._id,
          data: {
            description: values.description,
            img: imageURL.length > 0 ? dataImage : dataDetail?.img,
            link: values.link
          }
        })
        if (dataUpdated.result) {
          setLoading(false)
          openNotification({ key: 'successNotfication', message: 'Chỉnh sửa banner thành công', duration: 2.5, type: 'success' });
          fetchBanners()
          setIsModalOpen(false);
        }
      });
    } catch (error) {
      setLoading(false)
      openNotification({ key: 'failNotfication', message: 'Chỉnh sửa banner thất bại: ' + error.message, duration: 2.5, type: 'error' });
    }

  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setDataDetail(undefined);
    setImageURL("");
  };
  const fetchBanners = async () => {
    try {
      const dataApi = await bannerApi.getAll();
      setData(dataApi.result);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (stt) => {
    await bannerApi.delBanner(stt);
    await fetchBanners();
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
    fetchBanners();
  }, []);
  React.useEffect(() => {
    if (!isModalOpen) {
      setDataDetail(undefined);
      setImageURL("");
    }
  }, [isModalOpen])
  React.useEffect(() => {
    form.setFieldsValue({
      description: dataDetail?.description,
      link: dataDetail?.link
    });
  }, [dataDetail]);
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
        <h1 className='text-2xl font-bold'>Quản lý danh sách Banner</h1>
        <Row
          style={{
            display: "flex",
            justifyContent: "end",
            marginBottom: "10px",
          }}
        >
          <Button className='min-w-[200px] bg-green-500 text-white font-bold' onClick={() => navigate("/admin/edit")}>
            Tạo mới{" "}
          </Button>
        </Row>
        <Modal
          title='Chỉnh sửa banner'
          centered={true}
          open={isModalOpen}
          onOk={handleOk}
          width={800}

          confirmLoading={loading}
          onCancel={handleCancel}
          okText={"Lưu"}
        >
          {dataDetail ? (
            <Form form={form}>
              <Form.Item
                name='description'
                initialValue={dataDetail.description}
                label='Mô tả'
              >
                <Input />
              </Form.Item>

              <Form.Item
                name='link'
                initialValue={dataDetail.link}
                label='Link chuyển tiếp'
              >
                <Input></Input>
              </Form.Item>
              <Form.Item name='picture' label='Hình ảnh'>
                <div>
                  <img
                    style={{
                      width: "100%",

                      objectFit: "cover",
                    }}
                    src={
                      imageURL.length > 0
                        ? imageURL
                        : `${dataDetail.img}`
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
          dataSource={data}
        />
      </Col>
    </Row>
  );
};

export default HomePageAdmin;
