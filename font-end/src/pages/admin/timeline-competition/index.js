import React from "react";
import { Button, Col, Form, Input, Modal, Row, Table } from "antd";
import { columns } from "./render";
import { useNavigate } from "react-router-dom";

import mileStoneApi from '../../../api/milestone';
import competitionApi from '../../../api/competitionApi';

const MileStoneAdmin = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [dataDetail, setDataDetail] = React.useState();
  const [dataCompetition, setDataCompetion] = React.useState();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);


  const showModal = async (id) => {
    setIsModalOpen(true);
    const dataApiDetail = await mileStoneApi.getById(id);

    setDataDetail(dataApiDetail[0]);
  };

  const handleOk = () => {
    setIsModalOpen(false);

    form.validateFields().then((values) => {

      const check = mileStoneApi.update({
        id: dataDetail?.id,
        name: values.name,
        start_date: values.start_date,
        end_date: values.end_date
      });
      if (check) {
        alert("ADD SUCCESS!");
        fetchTimeline();
      }
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setDataDetail(undefined)

  };
  const fetchTimeline = async () => {
    try {
      const dataApi = await mileStoneApi.getAllMilestone({ page: currentPage });
      setData(dataApi);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    await mileStoneApi.delete(id);
    await fetchTimeline();
  };

  React.useEffect(() => {

    const fetchData = async () => {
      const data = await competitionApi.getAllCompetition({ pageSize: 500 });
      setDataCompetion(data.data)
    }
    fetchData()
  }, []);
  React.useEffect(() => {
    fetchTimeline();
    setLoading(false);
  }, [currentPage]);

  React.useEffect(() => {
    form.setFieldsValue({
      name: dataDetail?.name,
      start_date: dataDetail?.start_date,
      end_date: dataDetail?.end_date
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
        <h1 className='text-2xl font-bold'>Quản lý timeline từng cuộc thi</h1>
        <Row
          style={{
            display: "flex",
            justifyContent: "end",
            marginBottom: "10px",
          }}
        >
          <Button
            className='min-w-[200px] bg-green-500 text-white font-bold'
            onClick={() => navigate("/admin/milestone/edit")}
          >
            Tạo mới{" "}
          </Button>
        </Row>
        <Modal
          title='Chỉnh sửa vòng thi'
          open={isModalOpen}
          onOk={handleOk}
          width={800}
          okButtonProps={{ style: { background: 'green', minWidth: '150px' } }}
          onCancel={handleCancel}
          okText={"Lưu"}
        >
          {dataDetail ? (
            <Form form={form}>
              <Form.Item
                name='name'
                initialValue={dataDetail.name}
                label='Tên vòng thi'
              >
                <Input />
              </Form.Item>

              <Form.Item
                name='start_date'
                initialValue={dataDetail.start_date}
                label='Ngày bắt đầu'
              >
                <Input />
              </Form.Item>
              <Form.Item
                name='end_date'
                initialValue={dataDetail.end_date}
                label='Ngày kết thúc'
              >
                <Input />
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

export default MileStoneAdmin;
