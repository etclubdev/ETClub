import React from "react";
import { Button, Table, Row, Col, Form, Input, Modal } from "antd";
import competitionApi from "../../../api/competitionApi";
import { columns, data } from "./render";
import { useNavigate } from "react-router-dom";
const CompetitionAdmin = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [dataDetail, setDataDetail] = React.useState();
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [imageLanscape, setImageLanscape] = React.useState();
  const [imagePortrait, setImagePortrait] = React.useState();
  const [imageLookback, setImageLookback] = React.useState();
  const [imageURLLanscape, setImageURLLanscape] = React.useState("");
  const [imageURLPortrait, setImageURLPortrait] = React.useState("");
  const [imageURLLookback, setImageURLLookback] = React.useState("");
  let objectURLLanscapePoster = "";
  let objectURLPortraitPoster = "";
  let objectURLLookback = "";
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
      formData.append(
        "lookback_img",
        imageURLLookback.length > 0 ? imageLookback : dataDetail.lookback_img
      );
      formData.append("status", values.status);
      formData.append("lookback_script", values.lookback_script);
      console.log("check data", formData);
      const check = competitionApi.updateCompetition(formData);
      console.log("check", check);
      if (check) {
        alert("ADD SUCCESS!");
        fetchCompetitions();
      }
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setImageURLLanscape("");
    setImageURLPortrait("");
    setImageURLLookback("");
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
  const fileOnChangeLookback = (event) => {
    const file = event.target.files[0];

    objectURLLookback = URL.createObjectURL(file);
    setImageURLLookback(objectURLLookback);
    if (file) {
      setImageLookback(file);
    } else {
      setImageLookback(null);
      alert("Please select a file.");
    }
  };

  React.useEffect(() => {
    fetchCompetitions();
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
        <h1>Quản lý danh sách cuộc thi</h1>
        <Row
          style={{
            display: "flex",
            justifyContent: "end",
            marginBottom: "10px",
          }}
        >
          <Button
            type='primary'
            onClick={() => navigate("/admin/competition/edit")}
          >
            Tạo mới{" "}
          </Button>
        </Row>
        <Modal
          title='Chỉnh sửa cuộc thi'
          open={isModalOpen}
          onOk={handleOk}
          width={800}
          onCancel={handleCancel}
          okText={"Lưu"}
        >
          {dataDetail ? (
            <Form form={form}>
              <Form.Item
                name='name'
                initialValue={dataDetail.name}
                label='Mô tả'
              >
                <Input />
              </Form.Item>
              <Form.Item
                name='status'
                initialValue={dataDetail.status}
                label='Trạng thái'
              >
                <Input />
              </Form.Item>
              <Form.Item
                name='lookback_script'
                initialValue={dataDetail.lookback_script}
                label='Recap'
              >
                <Input />
              </Form.Item>
              <Form.Item name='landscape_poster' label='Hình ảnh cảnh quan'>
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
              <Form.Item name='portrait_poster' label='Hình ảnh chân dung'>
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
              <Form.Item name='lookback_img' label='Hình ảnh Recap'>
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
              </Form.Item>
            </Form>
          ) : (
            <span>Loading ...</span>
          )}
        </Modal>
        <Table
          columns={columns(handleDelete, showModal)}
          loading={loading}
          scroll={{ y: 240 }}
          dataSource={data}
        />
      </Col>
    </Row>
  );
};

export default CompetitionAdmin;
