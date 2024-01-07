import React from "react";
import { Button, Col, Form, Input, Modal, Row, Select, Table, notification } from "antd";
import { columns } from "./render";
import { useNavigate } from "react-router-dom";
import bannerApi from "../../../api/bannerApi";
import etNewsApi from '../../../api/etNewsApi';
import EditorComponent from '../../../components/Editor';
import uploadApi from '../../../api/basicInfoApi';
import { openNotification } from '../../../utils';
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
  const [loading, setLoading] = React.useState(false);
  const [image, setImage] = React.useState();
  const [imageURL, setImageURL] = React.useState("");
  const [inputSearch, setInputSearch] = React.useState("")
  const [selectedCategory, setSelectedCategory] = React.useState(undefined)
  let objectURL = "";
  const showModal = async (id) => {
    setIsModalOpen(true);
    const dataApiDetail = await etNewsApi.get(id);

    setDataDetail(dataApiDetail?.result);
  };
  const fetchData = async (inputSearch, selectedCategory) => {
    try {
      const dataApi = await etNewsApi.getAll({ page: currentPage, title: inputSearch, category: selectedCategory });

      setData(dataApi?.result);
    } catch (error) {
      console.log(error);
    }
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
  const handleOk = () => {
    setLoading(true)

    openNotification({ key: 'createNotfication', message: 'Đang cập nhật ....', type: 'info' });

    try {
      form.validateFields().then(async (values) => {
        let dataImage = "";

        if (imageURL.length > 0) {
          const dataUpload = new FormData();
          dataUpload.append("images", image)

          const cloudImage = await uploadApi.uploadImages(dataUpload);

          dataImage = cloudImage?.data[0]?.url
        }

        const dataUpdated = await etNewsApi.update({
          id: dataDetail?._id,
          data: {
            name: values.name,
            image: imageURL.length > 0 ? dataImage : dataDetail.image,
            link: values.link,
            tiny_desc: values.tiny_desc,
            category: values.category,
            full_news: value.length > 0 ? value : dataDetail.full_news
          }
        })
        if (dataUpdated.result) {
          setLoading(false)
          openNotification({ key: 'successNotfication', message: 'Chỉnh sửa banner thành công', duration: 2.5, type: 'success' });
          fetchData();
          setImageURL("");
          setIsModalOpen(false);
        }

      });
    } catch (error) {
      setLoading(false)
      openNotification({ key: 'failNotfication', message: 'Chỉnh sửa banner thất bại: ' + error.message, duration: 2.5, type: 'error' });
    }
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

  const handleSearch = async () => {
    await fetchData(inputSearch, selectedCategory);
  };

  const handleReload = async () => {
    setInputSearch(null);
    setSelectedCategory(undefined);
    await fetchData(null, null)
  };
  React.useEffect(() => {
    fetchData();

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
        <h1 className='text-2xl font-bold'>Quản lý danh sách ETNews</h1>
        <Row
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <div className='flex '>
            <Input value={inputSearch} onChange={(e) => setInputSearch(e.target.value)} placeholder='Tìm kiếm theo tên' />
            <div className='w-[300px] mx-[20px]'>
              <Select
                value={selectedCategory}
                placeholder='Tìm kiếm theo thể loại'
                className='block'
                onChange={e => setSelectedCategory(e)}
                showSearch
                options={[
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
                ]}
              />

            </div>
            <Button
              className='min-w-[100px] bg-blue-400 text-white font-bold'
              onClick={handleSearch}
            >
              Tìm kiếm{" "}
            </Button>
            <Button
              className='min-w-[100px] bg-blue-400 text-white font-bold ml-[20px]'
              onClick={handleReload}
            >
              Reload{" "}
            </Button>
          </div>
          <Button className='min-w-[200px] bg-green-500 text-white font-bold' onClick={() => navigate("/admin/etnews/edit")}>
            Tạo mới{" "}
          </Button>
        </Row>
        <Modal
          title='Chỉnh sửa bản tin'
          open={isModalOpen}
          onOk={handleOk}
          okButtonProps={{ style: { background: 'green', minWidth: '150px' } }}
          confirmLoading={loading}
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
                        : `${dataDetail.image}`
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
          scroll={{ y: 620 }}
          pagination={{ current: currentPage, defaultCurrent: 1, pageSize: 9, total: data?.total || 0, onChange: (number) => setCurrentPage(number) }}
          rootClassName='table-admin'
          dataSource={data?.data?.length > 0 ? data?.data : []}
        />
      </Col>
    </Row>
  );
};

export default ETNewsAdmin;
