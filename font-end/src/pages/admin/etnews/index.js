import React from "react";
import { Button, Table } from "antd";
import { columns, data } from "./render";
import { useNavigate } from "react-router-dom";
const ETNewsAdmin = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>ETNEWS</div>
      <Button
        onClick={() => navigate("/admin/etnews/edit")}
        style={{ display: "flex", justifyContent: "end" }}
      >
        Thêm
      </Button>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default ETNewsAdmin;
