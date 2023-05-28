import React from "react";
import { Button, Col, Form, Input, Modal, Row, Table } from "antd";
import { columns } from "./render";
import { useNavigate } from "react-router-dom";
import bannerApi from "../../../api/bannerApi";
const HomePageAdmin = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [dataDetail, setDataDetail] = React.useState();
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [image, setImage] = React.useState();
  const [imageURL, setImageURL] = React.useState("");
  let objectURL = "";
  const showModal = async (stt) => {
    setIsModalOpen(true);
    const dataApiDetail = await bannerApi.getById(stt);

    setDataDetail(dataApiDetail[0]);
  };

  const handleOk = () => {
    setIsModalOpen(false);

    form.validateFields().then((values) => {
      const data = new FormData();
      data.append("description", values.description);
      data.append("img", imageURL.length > 0 ? image : dataDetail.img);
      data.append("stt", dataDetail.stt);
      data.append("link", values.link);

      const check = bannerApi.updateBanner(data);
      if (check) {
        alert("ADD SUCCESS!");
        fetchBanners();
      }
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setImageURL("");
  };
  const fetchBanners = async () => {
    try {
      const dataApi = await bannerApi.getAll();
      setData(dataApi);
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
    console.log(file);
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
    setLoading(false);
  }, []);
  return (
    <Row justify='center'>
      <Col
        style={{
          marginTop: "15px",
        }}
        span={20}
      >
        <h1>Quản lý danh sách Banner</h1>
        <Row
          style={{
            display: "flex",
            justifyContent: "end",
            marginBottom: "10px",
          }}
        >
          <Button type='primary' onClick={() => navigate("/admin/edit")}>
            Tạo mới{" "}
          </Button>
        </Row>
        <Modal
          title='Chỉnh sửa banner'
          open={isModalOpen}
          onOk={handleOk}
          width={800}
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
                      height: "150px",
                      objectFit: "contain",
                    }}
                    src={
                      imageURL.length > 0
                        ? imageURL
                        : `https://et-api-psi.vercel.app/public/images/banners/${dataDetail.img}`
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
          dataSource={data}
        />
      </Col>
    </Row>
  );
};

export default HomePageAdmin;
