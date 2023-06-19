import React from "react";
import { Button, Col, Form, Input, Modal, Row, Table } from "antd";
import { columns } from "./render";
import { useNavigate } from "react-router-dom";
import sponsorApi from "../../../api/sponsorApi";
import competitionApi from '../../../api/competitionApi';
const SponsorAdmin = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [dataCompetition, setDataCompetion] = React.useState([]);
  const [dataDetail, setDataDetail] = React.useState();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [image, setImage] = React.useState();
  const [imageURL, setImageURL] = React.useState("");
  let objectURL = "";
  const showModal = async (id) => {
    setIsModalOpen(true);
    const dataApiDetail = await sponsorApi.getBySponsorId(id);

    setDataDetail(dataApiDetail[0]);
  };

  const handleOk = () => {
    setIsModalOpen(false);

    form.validateFields().then((values) => {
      const data = new FormData();
      data.append("kind", values.kind);
      data.append("logo", imageURL.length > 0 ? image : dataDetail.logo);
      data.append("id", dataDetail.id);
      data.append("name", values.name);
      const check = sponsorApi.updateSponsor(data);
      if (check) {
        alert("ADD SUCCESS!");
        fetchSponsor();
      }
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setImageURL("");
  };
  const fetchSponsor = async () => {
    try {
      const dataApi = await sponsorApi.getAllsponsor({ page: currentPage });
      setData(dataApi);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    await sponsorApi.delSponsor(id);
    await fetchSponsor();
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
    fetchSponsor();
    setLoading(false);
  }, [currentPage]);
  React.useEffect(() => {

    const fetchData = async () => {
      const data = await competitionApi.getAllCompetition({ pageSize: 500 });
      setDataCompetion(data.data)
    }
    fetchData()

  }, []);

  React.useEffect(() => {
    form.setFieldsValue({
      name: dataDetail?.name,
      kind: dataDetail?.kind,

    });
  }, [dataDetail]);

  React.useEffect(() => {
    if (!isModalOpen) {
      setDataDetail(undefined)
    }
  }, [isModalOpen])
  return (
    <Row justify='center'>
      <Col
        style={{
          marginTop: "15px",
        }}
        span={20}
      >
        <h1 className='text-2xl font-bold'>Quản lý danh sách nhà tài trợ</h1>
        <Row
          style={{
            display: "flex",
            justifyContent: "end",
            marginBottom: "10px",
          }}
        >
          <Button
            className='min-w-[200px] bg-green-500 text-white font-bold'
            onClick={() => navigate("/admin/sponsor/edit")}
          >
            Tạo mới{" "}
          </Button>
        </Row>
        <Modal
          title='Chỉnh sửa nhà tài trợ'
          open={isModalOpen}
          onOk={handleOk}
          okButtonProps={{ style: { background: 'green', minWidth: '150px' } }}
          width={800}
          onCancel={handleCancel}
          okText={"Lưu"}
        >
          {dataDetail ? (
            <Form form={form}>
              <Form.Item
                name='name'
                initialValue={dataDetail.name}
                label='Tên nhà tài trợ'
              >
                <Input />
              </Form.Item>

              <Form.Item
                name='kind'
                initialValue={dataDetail.kind}
                label='Thể loại'
              >
                <Input></Input>
              </Form.Item>
              <Form.Item name='logo' label='Logo'>
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
                        : `https://et-api-2023.onrender.com/public/images/sponsor/${dataDetail.logo}`
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
          columns={columns(handleDelete, showModal, dataCompetition)}
          loading={loading}
          pagination={{ current: currentPage, defaultCurrent: 1, pageSize: 10, total: data?.total || 0, onChange: (number) => setCurrentPage(number) }}
          rootClassName='table-admin'
          dataSource={data?.data || []}
        />
      </Col>
    </Row>
  );
};

export default SponsorAdmin;
