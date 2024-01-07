import React from "react";
import { Button, Col, Form, Input, Modal, Row, Table, DatePicker, notification } from "antd";
import { columns } from "./render";
import { useNavigate } from "react-router-dom";

import mileStoneApi from '../../../api/milestone';
import competitionApi from '../../../api/competitionApi';
import dayjs from 'dayjs';
import { openNotification } from '../../../utils';

const MileStoneAdmin = () => {

  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [dataDetail, setDataDetail] = React.useState();
  const [dataCompetition, setDataCompetion] = React.useState();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);


  const showModal = async (id) => {
    setIsModalOpen(true);
    const dataApiDetail = await mileStoneApi.getByMilestoneId(id);

    setDataDetail(dataApiDetail?.result);
  };

  const handleOk = () => {
    setLoading(true)

    openNotification({ key: 'createNotfication', message: 'Đang tạo ....', type: 'info' });

    try {
      form.validateFields().then(async (values) => {
        if (!values.start_date) {
          alert("Ngày bắt đầu không được để trống")
          return;
        }

        const dataUpdated = await mileStoneApi.updateMilestone({
          id: dataDetail?._id,
          data: {
            name: values.name,
            start_date: dayjs(values.start_date, 'DD/MM/YYYY').format('YYYY-MM-DD'),
            end_date: values.end_date !== null ? dayjs(values.end_date, 'DD/MM/YYYY').format('YYYY-MM-DD') : null,
            competition_id: dataDetail?.competition_id
          }
        })
        if (dataUpdated.result) {
          setLoading(false)
          openNotification({ key: 'successNotfication', message: 'Cập nhật timeline thành công', duration: 2.5, type: 'success' });

          fetchTimeline();
          setIsModalOpen(false);
        }
      });
    } catch (error) {
      setLoading(false)
      openNotification({ key: 'failNotfication', message: 'Cập nhật timeline thất bại: ' + error.message, duration: 2.5, type: 'error' });
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setDataDetail(undefined)

  };
  const fetchTimeline = async () => {
    try {
      const dataApi = await mileStoneApi.getAllMilestone({ page: currentPage });

      setData(dataApi?.result);
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

      setDataCompetion(data?.result?.competitions)
    }
    fetchData()
  }, []);
  React.useEffect(() => {
    fetchTimeline();

  }, [currentPage]);

  React.useEffect(() => {
    form.setFieldsValue({
      name: dataDetail?.name,
      start_date: dayjs(dataDetail?.start_date),
      end_date: dataDetail?.end_date !== null ? dayjs(dataDetail?.end_date) : dayjs()
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
                label='Ngày bắt đầu'

              >
                <DatePicker format={"DD/MM/YYYY"} />
              </Form.Item>
              <Form.Item name='end_date' label='Ngày kết thúc'>
                <DatePicker format={"DD/MM/YYYY"} />
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
          dataSource={data?.length > 0 ? data : []}
        />
      </Col>
    </Row>
  );
};

export default MileStoneAdmin;
