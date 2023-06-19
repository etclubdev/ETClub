import React from "react";
import { Button, Col, Form, Input, Modal, Row, Select, Table } from "antd";
import { columns } from "./render";
import { useNavigate } from "react-router-dom";
import bannerApi from "../../../api/bannerApi";
import etNewsApi from '../../../api/etNewsApi';
import EditorComponent from '../../../components/Editor';
const options = [
  {
    value: 0,
    label: 'Tất cả'
  },
  {
    value: 1,
    label: 'Tin chính phủ số'
  },
  {
    value: 2,
    label: 'Tin công nghệ thế giới'
  },
  {
    value: 3,
    label: 'Tin công nghệ Việt Nam'
  },
  {
    value: 4,
    label: 'Tin tạo sự ảnh hưởng'
  },
]
const ETNewsAdmin = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [dataDetail, setDataDetail] = React.useState();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [value, setValue] = React.useState('');
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [image, setImage] = React.useState();
  const [imageURL, setImageURL] = React.useState("");
  let objectURL = "";
  const showModal = async (stt) => {
    setIsModalOpen(true);
    const dataApiDetail = await etNewsApi.getDetailByAdmin(stt);

    setDataDetail(dataApiDetail[0]);
  };
  const fetchData = async () => {
    try {
      const dataApi = await etNewsApi.getAll({ page: currentPage });
      setData(dataApi);
    } catch (error) {
      console.log(error);
    }
  };
  const handleOk = () => {
    setIsModalOpen(false);

    form.validateFields().then((values) => {
      const data = new FormData();
      data.append("name", values.name);
      data.append("image", imageURL.length > 0 ? image : dataDetail.image);
      data.append("id", dataDetail.id);
      data.append("link", values.link);
      data.append("tiny_desc", values.tiny_desc);
      data.append("category", values.category);
      data.append("full_news", value.length > 0 ? value : dataDetail.full_news);

      const check = etNewsApi.update(data);
      if (check) {
        alert("ADD SUCCESS!");
        fetchData();
      }
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setDataDetail(undefined)
    setImageURL("");

  };

  const handleDelete = async (stt) => {
    await etNewsApi.remove(stt);
    await fetchData();
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
    fetchData();
    setLoading(false);
  }, [currentPage]);
  React.useEffect(() => {
    form.setFieldsValue({
      name: dataDetail?.name,
      tiny_desc: dataDetail?.tiny_desc,
      link: dataDetail?.link,
      category: dataDetail?.category
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
        <h1 className='text-2xl font-bold'>Quản lý danh sách ETNews</h1>
        <Row
          style={{
            display: "flex",
            justifyContent: "end",
            marginBottom: "10px",
          }}
        >
          <Button className='min-w-[200px] bg-green-500 text-white font-bold' onClick={() => navigate("/admin/etnews/edit")}>
            Tạo mới{" "}
          </Button>
        </Row>
        <Modal
          title='Chỉnh sửa banner'
          open={isModalOpen}
          onOk={handleOk}
          okButtonProps={{ style: { background: 'green', minWidth: '150px' } }}
          width={788}
          onCancel={handleCancel}
          okText={"Lưu"}
        >
          {dataDetail ? (
            <Form form={form}>
              <Form.Item
                name='name'
                initialValue={dataDetail.name}
                label='Tiêu đề'
              >
                <Input />
              </Form.Item>
              <Form.Item
                name='tiny_desc'
                initialValue={dataDetail.tiny_desc}
                label='Mô tả ngắn'
              >
                <Input></Input>
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
                        : `http://127.0.0.1:1111/public/images/news/${dataDetail.image}`
                    }
                    alt=''
                  />
                </div>
                <div>
                  <input type='file' onChange={fileOnChange} />
                </div>
              </Form.Item>
              <Form.Item initialValue={dataDetail.category} name='category' label='Thể loại'>
                <Select options={options} >

                </Select>
              </Form.Item>
              <div>
                Nội dung
              </div>
              <div className=' w-full'>
                <div className='' >
                  <EditorComponent initialValue={dataDetail.full_news} setValue={setValue} />
                </div>

              </div>

            </Form>
          ) : (
            <span>Loading ...</span>
          )}
        </Modal>
        <Table
          columns={columns(showModal, handleDelete)}
          loading={loading}
          pagination={{ current: currentPage, defaultCurrent: 1, pageSize: 9, total: data?.total || 0, onChange: (number) => setCurrentPage(number) }}
          rootClassName='table-admin'
          dataSource={data?.data}
        />
      </Col>
    </Row>
  );
};

export default ETNewsAdmin;
