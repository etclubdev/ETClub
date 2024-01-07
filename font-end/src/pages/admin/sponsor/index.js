import React from "react";
import { Button, Col, Form, Input, Modal, Row, Table, Select, notification } from "antd";
import { columns } from "./render";
import { useNavigate } from "react-router-dom";
import sponsorApi from "../../../api/sponsorApi";
import competitionApi from '../../../api/competitionApi';
import uploadApi from '../../../api/basicInfoApi';
import { openNotification } from '../../../utils';
const SponsorAdmin = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [dataCompetition, setDataCompetion] = React.useState([]);
  const [dataDetail, setDataDetail] = React.useState();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [image, setImage] = React.useState();
  const [imageURL, setImageURL] = React.useState("");

  let objectURL = "";
  const showModal = async (id) => {
    setIsModalOpen(true);
    const dataApiDetail = await sponsorApi.getBySponsorId(id);

    setDataDetail(dataApiDetail?.result);
  };

  const handleOk = () => {
    setLoading(true)

    openNotification({ key: 'createNotfication', message: 'Đang tạo ....', type: 'info' });

    try {
      form.validateFields().then(async (values) => {
        let dataImage = "";
        if (imageURL.length > 0) {
          const dataUpload = new FormData();
          dataUpload.append("images", image)
          const cloudImage = await uploadApi.uploadImages(dataUpload);
          console.log(cloudImage)

          dataImage = cloudImage?.data[0]?.url

        }
        const dataUpdated = await sponsorApi.updateSponsor({
          id: dataDetail?._id,
          data: {
            kind: values.kind,
            logo: imageURL.length > 0 ? dataImage : dataDetail.logo,
            competition_id: dataDetail?.competition_id,
            name: values.name
          }
        })
        if (dataUpdated.result) {
          setLoading(false)
          openNotification({ key: 'successNotfication', message: 'Cập nhật nhà tài trợ thành công', duration: 2.5, type: 'success' });
          fetchSponsor();
          setIsModalOpen(false);
        }

      });
    } catch (error) {
      setLoading(false)
      openNotification({ key: 'failNotfication', message: 'Cập nhật nhà tài trợ thất bại: ' + error.message, duration: 2.5, type: 'error' });
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setImageURL("");
  };
  const fetchSponsor = async () => {
    try {
      const dataApi = await sponsorApi.getAllsponsor({ page: currentPage });

      setData(dataApi?.result);
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

      setDataCompetion(data?.result?.competitions)
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
          confirmLoading={loading}
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

              <Form.Item name='kind' label='Thể loại' initialValue={dataDetail?.kind}>
                <Select

                  options={[
                    {
                      value: 1,
                      label: 'Nhà tài trợ kim cương'
                    },
                    {
                      value: 2,
                      label: 'Nhà tài trợ vàng'
                    },
                    {
                      value: 3,
                      label: 'Nhà tài trợ bạc'
                    },
                    {
                      value: 4,
                      label: 'Nhà tài trợ đồng'
                    },
                    {
                      value: 5,
                      label: 'Bảo trợ truyền thông'
                    },
                    {
                      value: 6,
                      label: 'Đối tác Marketing'
                    },
                  ]}
                />
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
                        : `${dataDetail.logo}`
                    }
                    alt=''
                  />
                  <div>
                    <input type='file' onChange={fileOnChange} />
                  </div>
                </div>

              </Form.Item>
            </Form>
          ) : (
            <span>Loading ...</span>
          )}
        </Modal>
        <Table
          columns={columns(handleDelete, showModal, dataCompetition.length > 0 ? dataCompetition : [])}
          loading={loading}
          pagination={{ current: currentPage, defaultCurrent: 1, pageSize: 10, total: data?.total || 0, onChange: (number) => setCurrentPage(number) }}
          rootClassName='table-admin'
          dataSource={data?.length > 0 ? data : []}
        />
      </Col>
    </Row>
  );
};

export default SponsorAdmin;
