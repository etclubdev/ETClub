import React from "react";
import { Button, Table, Row, Col, Form, Input, Modal, Select, notification } from "antd";
import competitionApi from "../../../api/competitionApi";
import { columns } from "./render";
import { useNavigate } from "react-router-dom";
import competitionResult from '../../../api/competitionResult';
import uploadApi from '../../../api/basicInfoApi';
import { openNotification } from '../../../utils';
const ResultCompetitionAdmin = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [dataDetail, setDataDetail] = React.useState();
  const [dataCompetition, setDataCompetion] = React.useState();
  const [form] = Form.useForm();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

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

    setDataDetail(dataApiDetail?.result);
  };
  //bấm lưu thông tin chỉnh sửa
  const handleOk = () => {
    setLoading(true)

    openNotification({ key: 'createNotfication', message: 'Đang tạo ....', type: 'info' });
    try {
      form.validateFields().then(async (values) => {
        let dataAvatarImage = "";
        if (imageURLAvatar.length > 0) {
          const dataUpload = new FormData();
          dataUpload.append("images", imageAvatar)
          const cloudImage = await uploadApi.uploadImages(dataUpload);
          console.log(cloudImage)

          dataAvatarImage = cloudImage?.data[0]?.url

        }
        let dataTeamImage = "";
        if (imageURLLogoTeam.length > 0) {
          const dataUpload = new FormData();
          dataUpload.append("images", imageLogoTeam)
          const cloudImage = await uploadApi.uploadImages(dataUpload);
          console.log(cloudImage)

          dataTeamImage = cloudImage?.data[0]?.url

        }
        const dataUpdated = await competitionResult.update({
          id: dataDetail?._id,
          data: {
            name: values.name,
            major: values.major,
            academic_year: values.academic_year,
            team: values.team,
            rank: values.rank,
            school: values.school,
            logo_team: dataDetail?.type === 2 && imageURLLogoTeam.length > 0 ? dataTeamImage : dataDetail?.logo_team,
            avt: dataDetail?.type === 1 && imageURLAvatar.length > 0 ? dataAvatarImage : dataDetail?.avt,
            competititon_id: dataDetail?.competition_id
          }
        })
        if (dataUpdated.result) {
          setLoading(false)
          openNotification({ key: 'successNotfication', message: 'Cập nhật kết quả thành công', duration: 2.5, type: 'success' });
          fetchCompetitionResults();
          setIsModalOpen(false);
        }

      });
    }
    catch (error) {
      setLoading(false)
      openNotification({ key: 'failNotfication', message: 'Cập nhật kết quả thất bại: ' + error.message, duration: 2.5, type: 'error' });
    }
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

      setData(dataApi?.result);
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
      setDataCompetion(data?.result?.competitions)
    }
    fetchData()

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

    if (!loading) {

      notification.destroy('createNotfication');

    }
    return () => {
      notification.destroy('createNotification');
    };

  }, [loading]);


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
          confirmLoading={loading}
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
                          : `${dataDetail.avt}`
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
                          : `${dataDetail.logo_team}`
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
          columns={columns(handleDelete, showModal, dataCompetition?.length > 0 ? dataCompetition : [])}
          loading={loading}
          rootClassName='table-admin'
          pagination={{ current: currentPage, defaultCurrent: 1, pageSize: 10, total: data?.total || 0, onChange: (number) => setCurrentPage(number) }}
          scroll={{ x: 240 }}
          dataSource={data?.length > 0 ? data : []}
        />
      </Col>
    </Row>
  );
};

export default ResultCompetitionAdmin;
