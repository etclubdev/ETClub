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
  const showModal = async (stt) => {
    setIsModalOpen(true);
    const dataApiDetail = await bannerApi.getById(stt);

    setDataDetail(dataApiDetail[0]);
  };

  const handleOk = () => {
    setIsModalOpen(false);

    form.validateFields().then((values) => {
      const check = bannerApi.updateBanner({
        description: values.description,
        link: values.link,
        stt: dataDetail.stt,
      });
      if (check) {
        alert("ADD SUCCESS!");
        fetchBanners();
      }
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
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
