import React from "react";
import { Button, Table } from "antd";
import { columns, data } from "./render";
import { useNavigate } from "react-router-dom";
const CompetitionAdmin = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>Quản lý danh sách cuộc thi </div>
      <Button
        onClick={() => navigate("/admin/competition/edit")}
        style={{ display: "flex", justifyContent: "end" }}
      >
        Thêm
      </Button>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default CompetitionAdmin;
