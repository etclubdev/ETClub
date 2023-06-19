import React from "react";
import { Button, Table, Row, Col, Form, Input, Modal } from "antd";
import competitionApi from "../../../api/competitionApi";
import { columns, data } from "./render";
import { useNavigate } from "react-router-dom";
import EditorComponent from '../../../components/Editor';
const CompetitionAdmin = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [dataDetail, setDataDetail] = React.useState();
  const [valueContent, setValueContent] = React.useState();
  const [valueRecap, setValueRecap] = React.useState();
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [imageLanscape, setImageLanscape] = React.useState();
  const [imagePortrait, setImagePortrait] = React.useState();
  const [imageURLLanscape, setImageURLLanscape] = React.useState("");
  const [imageURLPortrait, setImageURLPortrait] = React.useState("");
  let objectURLLanscapePoster = "";
  let objectURLPortraitPoster = "";

  const showModal = async (id) => {

    setIsModalOpen(true);
    const dataApiDetail = await competitionApi.getByCompetitionId(id);

    setDataDetail(dataApiDetail[0]);
  };

  const handleOk = () => {
    setIsModalOpen(false);

    form.validateFields().then((values) => {
      const formData = new FormData();
      formData.append("id", dataDetail.id);
      formData.append("name", values.name);
      formData.append(
        "landscape_poster",
        imageURLLanscape.length > 0
          ? imageLanscape
          : dataDetail.landscape_poster
      );
      formData.append(
        "portrait_poster",
        imageURLPortrait.length > 0 ? imagePortrait : dataDetail.portrait_poster
      );

      formData.append("status", values.status);
      formData.append("lookback_script", valueRecap);
      formData.append("content", valueContent)
      const check = competitionApi.updateCompetition(formData);

      if (check) {
        alert("ADD SUCCESS!");
        fetchCompetitions();
      }
    });
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
      setData(dataApi);
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
    setLoading(false);
  }, []);
  React.useEffect(() => {
    form.setFieldsValue({
      name: dataDetail?.name,
      status: dataDetail?.status
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

                label='Trạng thái'
              >
                <Input defaultValue={dataDetail?.status} />
              </Form.Item>
              {/* <Form.Item
                name='lookback_script'
                initialValue={dataDetail.lookback_script}
                label='Recap'
              >
                <Input />
              </Form.Item> */}
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
                        : `http://127.0.0.1:1111/public/images/competition/${dataDetail.landscape_poster}`
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
                        : `http://127.0.0.1:1111/public/images/competition/${dataDetail.portrait_poster}`
                    }
                    alt=''
                  />
                </div>
                <div>
                  <input type='file' onChange={fileOnChangePotraitPoster} />
                </div>
              </Form.Item>
              {/* <Form.Item name='lookback_img' label='Hình ảnh Recap'>
                <div>
                  <img
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "contain",
                    }}
                    src={
                      imageURLLookback.length > 0
                        ? imageURLLookback
                        : `http://127.0.0.1:1111/public/images/competition/${dataDetail.lookback_img}`
                    }
                    alt=''
                  />
                </div>
                <div>
                  <input type='file' onChange={fileOnChangeLookback} />
                </div>
              </Form.Item> */}
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
          dataSource={data?.data}
        />
      </Col>
    </Row>
  );
};

export default CompetitionAdmin;
