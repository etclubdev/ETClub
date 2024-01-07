import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Select, Upload, DatePicker, notification } from "antd";
import React from "react";
import competitionApi from "../../../../api/competitionApi";
import sponsorApi from "../../../../api/sponsorApi";
import mileStoneApi from '../../../../api/milestone';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom'
import { openNotification } from '../../../../utils';

const EditMileStone = () => {

  const [competitionIdSelected, setCompetitionSelected] = React.useState(undefined);
  const [dataCompetition, setDataCompetition] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate()
  const fetchCompetitions = async () => {
    try {
      const dataApi = await competitionApi.getAllCompetition();
      setDataCompetition(dataApi?.result?.competitions);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    fetchCompetitions();
  }, []);
  React.useEffect(() => {

    if (!loading) {

      notification.destroy('createNotfication');

    }
    return () => {
      notification.destroy('createNotification');
    };

  }, [loading]);
  return (
    <>
      {dataCompetition ? (
        <Form
          form={form}
          style={{
            background: "#fff",
            padding: "40px",
            height: "100%",
          }}
        >
          <h3 className='text-xl font-bold'>Tạo timeline cuộc thi</h3>

          <Form.Item rules={[
            { required: true, message: 'Trường này không được để trống' }
          ]} name='name' label='Tên vòng thi'>
            <Input></Input>
          </Form.Item>
          {/* <div className='mb-[10px]'>
            <span className='text-red-600'>Lưu ý:</span>
            <span className='text-teal-400'>Vui lòng nhập ngày bắt đầu và ngày kết thúc đúng định dạng DD/MM/YYYY</span>
          </div> */}
          <Form.Item name='start_date' label='Ngày bắt đầu'>
            <DatePicker format={"DD/MM/YYYY"} />
          </Form.Item>
          {/* <div className='mb-[10px]'>

            <span className='text-teal-400'>Ví dụ: 12/09/2021</span>
          </div> */}
          <Form.Item name='end_date' label='Ngày kết thúc'>
            <DatePicker format={"DD/MM/YYYY"} />
          </Form.Item>

          <Form.Item rules={[
            { required: true, message: 'Trường này không được để trống' }
          ]} name='competition_id' label='ID cuộc thi'>
            <Select
              value={competitionIdSelected}
              onChange={(e) => setCompetitionSelected(e)}
              options={[
                ...dataCompetition.map((item) => {
                  return {
                    value: item._id,
                    label: item.name,
                  };
                }),
              ]}
            />
          </Form.Item>


          <Form.Item>
            <Button
              className='min-w-[150px] bg-blue-400'
              disabled={loading}
              loading={loading}
              onClick={() => {
                setLoading(true)

                openNotification({ key: 'createNotfication', message: 'Đang tạo ....', type: 'info' });
                try {
                  form.validateFields().then((values) => {
                    if (!competitionIdSelected) {
                      alert('Vui lòng chọn ID cuộc thi')
                      return null
                    }


                    const check = mileStoneApi.addMilestone({
                      name: values.name,
                      start_date: dayjs(values.start_date, 'DD/MM/YYYY').format('YYYY-MM-DD'),
                      end_date: values.end_date != null ? dayjs(values.end_date, 'DD/MM/YYYY').format('YYYY-MM-DD') : null,
                      competition_id: competitionIdSelected
                    });
                    if (check) {
                      setLoading(false)
                      openNotification({ key: 'successNotfication', message: 'Thêm timeline thành công', duration: 2.5, type: 'success' });
                      form.resetFields();
                      setCompetitionSelected(undefined)
                      navigate('/admin/milestone')
                    }
                  });
                } catch (error) {
                  setLoading(false)
                  openNotification({ key: 'failNotfication', message: 'Thêm timeline thất bại: ' + error.message, duration: 2.5, type: 'error' });
                }
              }}
            >
              Tạo
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <span>Loading...</span>
      )}
    </>
  );
};

export default EditMileStone;
