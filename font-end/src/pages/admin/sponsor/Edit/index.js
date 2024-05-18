import { Button, Form, Input, Select, notification } from "antd";
import React from "react";
import competitionApi from "../../../../api/competitionApi";
import sponsorApi from "../../../../api/sponsorApi";
import uploadApi from '../../../../api/basicInfoApi';
import { useNavigate } from 'react-router-dom'
import { openNotification } from '../../../../utils';

const EditSponsor = () => {
  const [image, setImage] = React.useState();
  const [competitionIdSelected, setCompetitionSelected] = React.useState(undefined);
  const [kindSelected, setKindSelected] = React.useState(undefined);
  const [dataCompetition, setDataCompetition] = React.useState();
  const [imageURL, setImageURL] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate()
  const fileOnChange = (event) => {
    const file = event.target.files[0];
    setImageURL(URL.createObjectURL(file))
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
          <h3 className='text-xl font-bold'>Tạo nhà tài trợ</h3>

          <Form.Item name='name' label='Tên nhà tài trợ'>
            <Input></Input>
          </Form.Item>
          <Form.Item name='kind' label='Thể loại'>
            <Select
              onChange={(e) => setKindSelected(e)}
              value={kindSelected}
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
          <Form.Item name='competition_id' label='ID cuộc thi'>
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
          <Form.Item name='logo' label='Logo'>
            <div>
              {imageURL.length > 0 && <div>
                <img
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "contain",
                  }}
                  src={
                    imageURL
                  }
                  alt=''
                />
              </div>}
              <div>
                <input type='file' onChange={fileOnChange} />
              </div>
            </div>
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
                  form.validateFields().then(async (values) => {
                    if (!competitionIdSelected) {
                      alert('Vui lòng chọn ID cuộc thi')
                      return null
                    }
                    if (!kindSelected) {
                      alert('Vui lòng chọn loại nhà tài trợ')
                      return null
                    }
                    if (!image) {
                      alert('Vui lòng chọn logo')
                      return null
                    }
                    let imageData = ""
                    const dataUpload = new FormData();
                    dataUpload.append("images", image)
                    const cloudImage = await uploadApi.uploadImages(dataUpload);


                    imageData = cloudImage?.data[0]?.url

                    const check = await sponsorApi.addSponsor({
                      name: values.name,
                      kind: kindSelected,
                      competition_id: competitionIdSelected,
                      logo: imageData
                    });
                    if (check.result) {
                      setLoading(false)
                      openNotification({ key: 'successNotfication', message: 'Thêm nhà tài trợ thành công', duration: 2.5, type: 'success' });
                      form.resetFields();
                      setImage(undefined)
                      setImageURL("")
                      setCompetitionSelected(undefined)
                      setKindSelected(undefined)
                      navigate('/admin/sponsor')
                    }

                  });
                } catch (error) {
                  setLoading(false)
                  openNotification({ key: 'failNotfication', message: 'Thêm nhà tài trợ thất bại: ' + error.message, duration: 2.5, type: 'error' });
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

export default EditSponsor;
