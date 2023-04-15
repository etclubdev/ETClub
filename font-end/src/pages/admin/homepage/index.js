import React from "react";
import { Button, Form, Input, Modal, Table } from "antd";
import { columns } from "./render";
import { useNavigate } from "react-router-dom";
import bannerApi from "../../../api/bannerApi";
const HomePageAdmin = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [dataDetail, setDataDetail] = React.useState();
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

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
  }, []);
  return (
    <div>
      <h1>Homepage</h1>
      <div>Banner</div>
      <Button
        onClick={() => navigate("/admin/edit")}
        style={{ display: "flex", justifyContent: "end" }}
      >
        Thêm
      </Button>
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
      <Table columns={columns(handleDelete, showModal)} dataSource={data} />
    </div>
  );
};

export default HomePageAdmin;
