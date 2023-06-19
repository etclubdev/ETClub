import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Select, Upload } from "antd";
import React from "react";
import competitionApi from "../../../../api/competitionApi";
import sponsorApi from "../../../../api/sponsorApi";
import mileStoneApi from '../../../../api/milestone';

const EditMileStone = () => {

  const [competitionIdSelected, setCompetitionSelected] = React.useState(undefined);
  const [dataCompetition, setDataCompetition] = React.useState();
  const [form] = Form.useForm();

  const fetchCompetitions = async () => {
    try {
      const dataApi = await competitionApi.getAllCompetition();
      setDataCompetition(dataApi?.data);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    fetchCompetitions();
  }, []);
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
          <div className='mb-[10px]'>
            <span className='text-red-600'>Lưu ý:</span>
            <span className='text-teal-400'>Vui lòng nhập ngày bắt đầu và ngày kết thúc đúng định dạng DD/MM/YYYY</span>
          </div>
          <Form.Item rules={[
            { required: true, message: 'Trường này không được để trống' }
          ]} name='start_date' label='Ngày bắt đầu'>
            <Input></Input>
          </Form.Item>
          <div className='mb-[10px]'>

            <span className='text-teal-400'>Ví dụ: 12/09/2021</span>
          </div>
          <Form.Item rules={[
            { required: true, message: 'Trường này không được để trống' }
          ]} name='end_date' label='Ngày kết thúc'>
            <Input></Input>
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
                    value: item.id,
                    label: item.name,
                  };
                }),
              ]}
            />
          </Form.Item>


          <Form.Item>
            <Button
              className='min-w-[150px] bg-blue-400'

              onClick={() => {
                form.validateFields().then((values) => {
                  if (!competitionIdSelected) {
                    alert('Vui lòng chọn ID cuộc thi')
                    return null
                  }

                  if (!values.end_date.includes("/")) {
                    alert('Vui lòng nhập ngày kết thúc đúng định dạng')
                    return null
                  }
                  if (!values.start_date.includes("/")) {
                    alert('Vui lòng nhập ngày kết thúc đúng định dạng')
                    return null
                  }

                  // const data = new FormData();
                  // data.append("name", values.name);
                  // data.append("start_date", values.start_date);
                  // data.append("end_date", values.end_date);

                  // data.append("competition_id", competitionIdSelected);
                  const check = mileStoneApi.addMileStone({
                    name: values.name,
                    start_date: values.start_date,
                    end_date: values.end_date,
                    competition_id: competitionIdSelected
                  });
                  if (check) {
                    alert("ADD SUCCESS!");
                    form.resetFields();
                    setCompetitionSelected(undefined)

                  }
                });
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
