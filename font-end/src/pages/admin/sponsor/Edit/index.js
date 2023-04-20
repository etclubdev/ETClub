import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Select, Upload } from "antd";
import React from "react";
import competitionApi from "../../../../api/competitionApi";
import sponsorApi from "../../../../api/sponsorApi";

const EditSponsor = () => {
  const [image, setImage] = React.useState();
  const [competitionIdSelected, setCompetitionSelected] = React.useState();
  const [dataCompetition, setDataCompetition] = React.useState();
  const [form] = Form.useForm();
  const fileOnChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    } else {
      setImage(null);
      alert("Please select a file.");
    }
  };
  const fetchCompetitions = async () => {
    try {
      const dataApi = await competitionApi.getAllCompetition();
      setDataCompetition(dataApi);
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
          <h3>Tạo nhà tài trợ</h3>
          <Form.Item name='name' label='Tên nhà tài trợ'>
            <Input></Input>
          </Form.Item>
          <Form.Item name='kind' label='Thể loại'>
            <Input></Input>
          </Form.Item>
          <Form.Item name='competition_id' label='ID cuộc thi'>
            <Select
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
          <Form.Item name='logo' label='Logo'>
            <div>
              <input type='file' onChange={fileOnChange} />
            </div>
          </Form.Item>

          <Form.Item>
            <Button
              onClick={() => {
                form.validateFields().then((values) => {
                  const data = new FormData();
                  data.append("name", values.name);
                  data.append("logo", image);
                  data.append("kind", values.kind);
                  data.append("competition_id", competitionIdSelected);
                  const check = sponsorApi.addSponsor(data);
                  if (check) {
                    alert("ADD SUCCESS!");
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

export default EditSponsor;
