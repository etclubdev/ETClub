import React from "react";
import { Button, Table, Row, Col, Form, Input, Modal, Select } from "antd";
import competitionApi from "../../../api/competitionApi";
import { columns, data } from "./render";
import { useNavigate } from "react-router-dom";
import competitionResult from '../../../api/competitionResult';
const ResultCompetitionAdmin = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [dataDetail, setDataDetail] = React.useState();
  const [dataCompetition, setDataCompetion] = React.useState();
  const [form] = Form.useForm();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  //file  upload
  const [imageAvatar, setImageAvatar] = React.useState();
  const [imageLogoTeam, setImageLogoTeam] = React.useState();

  //url upload
  const [imageURLAvatar, setImageURLAvatar] = React.useState("");
  const [imageURLLogoTeam, setImageURLLogoTeam] = React.useState("");

  let objectURLAvatar = "";
  let objectURLLogoTeam = "";

  const showModal = async (id) => {
    setIsModalOpen(true);
    const dataApiDetail = await competitionResult.getById(id);

    setDataDetail(dataApiDetail[0]);
  };
  //bấm lưu thông tin chỉnh sửa
  const handleOk = () => {
    setIsModalOpen(false);

    form.validateFields().then((values) => {
      const formData = new FormData();
      formData.append("id", dataDetail.id);
      formData.append("name", values.name);
      formData.append("major", values.major);
      formData.append("academic_year", values.academic_year);
      formData.append("team", values.team);
      formData.append("rank", values.rank);
      formData.append("school", values.school);

      formData.append(
        "logo_team",
        dataDetail?.type === 2 ? imageURLLogoTeam.length > 0 ? imageLogoTeam : dataDetail.logo_team : null
      );
      formData.append(
        "avt",
        dataDetail?.type === 1 ? imageURLAvatar.length > 0
          ? imageAvatar
          : dataDetail.avt : null
      );


      const check = competitionResult.update(formData);

      if (check) {
        alert("ADD SUCCESS!");
        fetchCompetitionResults();
      }
    });
  };

  // tắt modal
  const handleCancel = () => {
    setIsModalOpen(false);
    setImageURLAvatar("");
    setImageURLLogoTeam("");
    setDataDetail(undefined);

  };
  // lấy danh sách cuộc thi
  const fetchCompetitionResults = async () => {
    try {
      const dataApi = await competitionResult.getAllCompetitionResult();
      setData(dataApi);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  // xóa kết quả cuộc thi
  const handleDelete = async (id) => {
    await competitionResult.delCompetitionResult(id);
    await fetchCompetitionResults();
  };

  // change avatar
  const fileOnChangeAvatar = (event) => {
    const file = event.target.files[0];

    objectURLAvatar = URL.createObjectURL(file);
    setImageURLAvatar(objectURLAvatar);
    if (file) {
      setImageAvatar(file);
    } else {
      setImageAvatar(null);
      alert("Please select a file.");
    }
  };

  // change logo_team
  const fileOnChangeLogoTeam = (event) => {
    const file = event.target.files[0];

    objectURLLogoTeam = URL.createObjectURL(file);
    setImageURLLogoTeam(objectURLLogoTeam);
    if (file) {
      setImageLogoTeam(file);
    } else {
      setImageLogoTeam(null);
      alert("Please select a file.");
    }
  };

  // lấy tất cả cuộc thi để lấy tên hiển thị ở danh sách
  React.useEffect(() => {
    fetchCompetitionResults();
    const fetchData = async () => {
      const data = await competitionApi.getAllCompetition({ pageSize: 500 });
      setDataCompetion(data.data)
    }
    fetchData()
    setLoading(false);
  }, []);


  React.useEffect(() => {
    form.setFieldsValue({
      name: dataDetail?.name,
      major: dataDetail?.major,
      academic_year: dataDetail?.academic_year,
      team: dataDetail?.team,
      rank: dataDetail?.rank,
      school: dataDetail?.school,

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
        <h1 className='text-2xl font-bold'>Quản lý danh sách kết quả cuộc thi</h1>
        <Row
          style={{
            display: "flex",
            justifyContent: "end",
            marginBottom: "10px",
          }}
        >
          <Button
            className='min-w-[200px] bg-green-500 text-white font-bold'
            onClick={() => navigate("/admin/competition-results/edit")}
          >
            Tạo mới{" "}
          </Button>
        </Row>

        {/* form chỉnh sửa kết quả cuộc thi */}
        <Modal
          title='Chỉnh sửa kết quả cuộc thi'
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
                label='Tên thí sinh'
              >
                <Input />
              </Form.Item>
              <Form.Item
                name='major'
                initialValue={dataDetail.major}
                label='Chuyên ngành'
              >
                <Input />
              </Form.Item>
              <Form.Item
                name='academic_year'
                initialValue={dataDetail.academic_year}
                label='Khóa'
              >
                <Input />
              </Form.Item>
              <Form.Item
                name='team'
                initialValue={dataDetail.team}
                label='Đội thi'
              >
                <Input />
              </Form.Item>
              <Form.Item initialValue={dataDetail.rank} name='rank' label='Xếp hạng'>
                <Select options={[{
                  value: 1,
                  label: 'Giải nhất'
                }, {
                  value: 2,
                  label: 'Giải nhì'
                }, {
                  value: 3,
                  label: 'Giải ba'
                }, {
                  value: 4,
                  label: 'Khuyến khích'
                }]} >

                </Select>
              </Form.Item>
              <Form.Item
                name='school'
                initialValue={dataDetail.school}
                label='Trường'
              >
                <Input />
              </Form.Item>
              {
                dataDetail.type === 1 &&
                <Form.Item name='avt' label='Avatar'>
                  <div>
                    <img
                      style={{
                        width: "100%",
                        height: "150px",
                        objectFit: "contain",
                      }}
                      src={
                        imageURLAvatar.length > 0
                          ? imageURLAvatar
                          : `https://et-api-2023.onrender.com/public/images/competition-results/${dataDetail.avt}`
                      }
                      alt=''
                    />
                  </div>
                  <div>
                    <input type='file' onChange={fileOnChangeAvatar} />
                  </div>
                </Form.Item>
              }
              {
                dataDetail.type === 2 &&
                <Form.Item name='logo_team' label='Logo team'>
                  <div>
                    <img
                      style={{
                        width: "100%",
                        height: "150px",
                        objectFit: "contain",
                      }}
                      src={
                        imageURLLogoTeam.length > 0
                          ? imageURLLogoTeam
                          : `https://et-api-2023.onrender.com/public/images/competition-results/${dataDetail.logo_team}`
                      }
                      alt=''
                    />
                  </div>
                  <div>
                    <input type='file' onChange={fileOnChangeLogoTeam} />
                  </div>
                </Form.Item>
              }


            </Form>
          ) : (
            <span>Loading ...</span>
          )}
        </Modal>

        {/* table liệt kê kết quả từng cuộc thi */}
        <Table
          columns={columns(handleDelete, showModal, dataCompetition)}
          loading={loading}
          rootClassName='table-admin'
          pagination={{ current: currentPage, defaultCurrent: 1, pageSize: 10, total: data?.total || 0, onChange: (number) => setCurrentPage(number) }}
          scroll={{ x: 240 }}
          dataSource={data?.data}
        />
      </Col>
    </Row>
  );
};

export default ResultCompetitionAdmin;
