import React from "react";
import { Button, Table } from "antd";
import { columns, data } from "./render";
import { useNavigate } from "react-router-dom";
const ThinkingAdmin = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>Cảm nghĩ</div>
      <Button
        onClick={() => navigate("/admin/thinking/edit")}
        style={{ display: "flex", justifyContent: "end" }}
      >
        Thêm
      </Button>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default ThinkingAdmin;
