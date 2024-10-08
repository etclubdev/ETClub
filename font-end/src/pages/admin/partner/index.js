import React from "react";
import { Button, Col, Row, Table } from "antd";
import { columns, data } from "./render";
import { useNavigate } from "react-router-dom";
const Partner = () => {
  const navigate = useNavigate();
  return (
    <Row justify='center'>
      <Col
        style={{
          marginTop: "15px",
        }}
        span={20}
      >
        <div>
          <h1>Quản lý danh sách đối tác đồng hành</h1>
          <Row
            style={{
              display: "flex",
              justifyContent: "end",
              marginBottom: "10px",
            }}
          >
            <Button
              type='primary'
              onClick={() => navigate("/admin/partner/edit")}
            >
              Tạo mới{" "}
            </Button>
          </Row>

          <Table columns={columns} dataSource={data} />
        </div>
      </Col>{" "}
    </Row>
  );
};

export default Partner;
