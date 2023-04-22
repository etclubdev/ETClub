import React from "react";
import { Button, Col, Form, Input, Modal, Row, Table } from "antd";
import { columns } from "./render";
import { useNavigate } from "react-router-dom";
import feelingApi from "../../../api/feelingApi";
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
    const dataApiDetail = await feelingApi.getById(stt);

    setDataDetail(dataApiDetail[0]);
  };

  const handleOk = () => {
    setIsModalOpen(false);

    form.validateFields().then((values) => {
      const data = new FormData();
      data.append("id", dataDetail.id);
      data.append("quote", values.quote);
      data.append("author", values.author);
      data.append("department", values.department);
      data.append("avatar", imageURL.length > 0 ? image : dataDetail.avatar);

      const check = feelingApi.updateFeeling(data);
      if (check) {
        alert("ADD SUCCESS!");
        fetchFeeling();
      }
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setImageURL("");
  };
  const fetchFeeling = async () => {
    try {
      const dataApi = await feelingApi.getAll();
      setData(dataApi);
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
  console.log(data);
  React.useEffect(() => {
    fetchFeeling();
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
        <h1>Quản lý danh sách Cảm nghĩ</h1>
        <Row
          style={{
            display: "flex",
            justifyContent: "end",
            marginBottom: "10px",
          }}
        >
          <Button
            type='primary'
            onClick={() => navigate("/admin/feeling/edit")}
          >
            Tạo mới{" "}
          </Button>
        </Row>
        <Modal
          title='Chỉnh sửa cảm nghĩ'
          open={isModalOpen}
          onOk={handleOk}
          width={800}
          onCancel={handleCancel}
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
                <Input></Input>
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
                        : `http://127.0.0.1:1111/public/images/feeling/${dataDetail.avatar}`
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
