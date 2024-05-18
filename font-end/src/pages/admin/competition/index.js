import React from "react";
import { Button, Table, Row, Col, Form, Input, Modal, DatePicker, notification, Select } from "antd";
import competitionApi from "../../../api/competitionApi";
import { columns, data } from "./render";
import { useNavigate } from "react-router-dom";
import EditorComponent from '../../../components/Editor';
import uploadApi from '../../../api/basicInfoApi';
import dayjs from 'dayjs';
import { openNotification } from '../../../utils';
const CompetitionAdmin = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [dataDetail, setDataDetail] = React.useState();
  const [valueContent, setValueContent] = React.useState();
  const [valueRecap, setValueRecap] = React.useState();
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [choosedStatus, setChoosedStatus] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [imageLanscape, setImageLanscape] = React.useState();
  const [imagePortrait, setImagePortrait] = React.useState();
  const [imageURLLanscape, setImageURLLanscape] = React.useState("");
  const [imageURLPortrait, setImageURLPortrait] = React.useState("");
  let objectURLLanscapePoster = "";
  let objectURLPortraitPoster = "";

  const showModal = async (id) => {

    setIsModalOpen(true);
    const dataApiDetail = await competitionApi.getByCompetitionId(id);

    setDataDetail(dataApiDetail.result);
  };

  const handleOk = () => {
    setLoading(true)

    openNotification({ key: 'createNotfication', message: 'Đang cập nhật ....', type: 'info' });

    try {
      form.validateFields().then(async (values) => {
        let dataImageLandscape = "";
        let dataImagePortrait = "";
        if (imageURLLanscape.length > 0) {
          const dataUpload = new FormData();
          dataUpload.append("images", imageLanscape)

          const cloudImage = await uploadApi.uploadImages(dataUpload);

          if (cloudImage) {
            alert('upload success')
          }
          dataImageLandscape = cloudImage?.data[0]?.url
        }
        if (imageURLPortrait.length > 0) {
          const dataUpload = new FormData();
          dataUpload.append("images", imagePortrait)
          const cloudImage = await uploadApi.uploadImages(dataUpload);

          if (cloudImage) {
            alert('upload success')
          }
          dataImagePortrait = cloudImage?.data[0]?.url
        }
        const dataUpdated = await competitionApi.updateCompetition({
          id: dataDetail?._id,
          data: {
            name: values.name,
            status: choosedStatus,
            landscape_poster: imageURLLanscape.length > 0 ? dataImageLandscape : dataDetail?.landscape_poster,
            portrait_poster: imageURLPortrait.length > 0 ? dataImagePortrait : dataDetail?.portrait_poster,
            lookback_script: valueRecap,
            content: valueContent,
            date: dayjs(values.date, 'DD/MM/YYYY').format('YYYY-MM-DD'),
            end_date: values.end_date !== null ? dayjs(values.end_date, 'DD/MM/YYYY').format('YYYY-MM-DD') : null,
          }
        })
        if (dataUpdated.result) {
          setLoading(false)
          openNotification({ key: 'successNotfication', message: 'Chỉnh sửa cuộc thi thành công', duration: 2.5, type: 'success' });
          fetchCompetitions()
          setIsModalOpen(false);
        }

      });
    } catch (error) {
      setLoading(false)
      openNotification({ key: 'failNotfication', message: 'Chỉnh sửa cuộc thi thất bại: ' + error.message, duration: 2.5, type: 'error' });
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setDataDetail(undefined)
    setImageURLLanscape("");
    setImageURLPortrait("");

  };
  const fetchCompetitions = async () => {
    try {
      const dataApi = await competitionApi.getAllCompetition();

      setData(dataApi.result.competitions);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    await competitionApi.delCompetition(id);
    await fetchCompetitions();
  };
  const fileOnChangeLandscapePoster = (event) => {
    const file = event.target.files[0];

    objectURLLanscapePoster = URL.createObjectURL(file);
    setImageURLLanscape(objectURLLanscapePoster);
    if (file) {
      setImageLanscape(file);
    } else {
      setImageLanscape(null);
      alert("Please select a file.");
    }
  };
  const fileOnChangePotraitPoster = (event) => {
    const file = event.target.files[0];

    objectURLPortraitPoster = URL.createObjectURL(file);
    setImageURLPortrait(objectURLPortraitPoster);
    if (file) {
      setImagePortrait(file);
    } else {
      setImagePortrait(null);
      alert("Please select a file.");
    }
  };


  React.useEffect(() => {
    fetchCompetitions();

  }, []);
  React.useEffect(() => {
    form.setFieldsValue({
      name: dataDetail?.name,
      status: dataDetail?.status,
      date: dayjs(dataDetail?.date),
      end_date: dataDetail?.end_date !== null ? dayjs(dataDetail?.end_date) : dayjs()
    });
  }, [dataDetail]);
  React.useEffect(() => {
    if (!isModalOpen) {
      setDataDetail(undefined)
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
        <h1 className='text-2xl font-bold'>Quản lý danh sách cuộc thi</h1>
        <Row
          style={{
            display: "flex",
            justifyContent: "end",
            marginBottom: "10px",
          }}
        >
          <Button
            className='min-w-[200px] bg-green-500 text-white font-bold'
            onClick={() => navigate("/admin/competition/edit")}
          >
            Tạo mới{" "}
          </Button>
        </Row>
        <Modal
          title='Chỉnh sửa cuộc thi'
          open={isModalOpen}
          onOk={handleOk}
          width={1120}
          confirmLoading={loading}
          okButtonProps={{ style: { background: 'green', minWidth: '150px' } }}
          centered
          onCancel={handleCancel}
          okText={"Lưu"}
        >
          {isModalOpen && dataDetail ? (
            <Form form={form}>
              <Form.Item
                name='name'

                label='Tên cuộc thi'
              >
                <Input defaultValue={dataDetail?.name} />
              </Form.Item>

              <Form.Item
                name='status'
                initialValue={dataDetail?.status}
                label='Trạng thái'
              >
                <Select
                  value={choosedStatus}
                  showSearch
                  onChange={(e) => setChoosedStatus(e)}
                  options={[
                    { value: 0, label: 'Sắp diễn ra' },
                    { value: 1, label: 'Đang diễn ra' },
                    { value: 2, label: 'Đã diễn ra' },

                  ]}
                />
              </Form.Item>
              <Form.Item name='date' label='Ngày bắt đầu'>
                <DatePicker format={"DD/MM/YYYY"} />
              </Form.Item>
              <Form.Item name='end_date' label='Ngày kết thúc'>
                <DatePicker format={"DD/MM/YYYY"} />
              </Form.Item>
              <div>Mô tả</div>
              <div className=' w-full'>
                <div className='' >
                  <EditorComponent initialValue={dataDetail?.content || ''} setValue={setValueContent} />
                </div>

              </div>
              <div>Recap</div>
              <div className=' w-full'>
                <div className='' >
                  <EditorComponent initialValue={dataDetail?.lookback_script || ''} setValue={setValueRecap} />
                </div>

              </div>
              <Form.Item name='landscape_poster' label='Ảnh ngang'>
                <div>
                  <img
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "contain",
                    }}
                    src={
                      imageURLLanscape.length > 0
                        ? imageURLLanscape
                        : `${dataDetail.landscape_poster}`
                    }
                    alt=''
                  />
                </div>
                <div>
                  <input type='file' onChange={fileOnChangeLandscapePoster} />
                </div>
              </Form.Item>
              <Form.Item name='portrait_poster' label='Ảnh dọc'>
                <div>
                  <img
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "contain",
                    }}
                    src={
                      imageURLPortrait.length > 0
                        ? imageURLPortrait
                        : `${dataDetail.portrait_poster}`
                    }
                    alt=''
                  />
                </div>
                <div>
                  <input type='file' onChange={fileOnChangePotraitPoster} />
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
          scroll={{ x: 240 }}
          dataSource={data?.length > 0 ? data : []}
        />
      </Col>
    </Row>
  );
};

export default CompetitionAdmin;
