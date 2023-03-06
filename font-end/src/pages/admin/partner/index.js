import React from "react";
import { Button, Table } from "antd";
import { columns, data } from "./render";
import { useNavigate } from "react-router-dom";
const Partner = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>Đối tác đồng hành</div>
      <Button
        onClick={() => navigate("/admin/partner/edit")}
        style={{ display: "flex", justifyContent: "end" }}
      >
        Thêm
      </Button>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Partner;
