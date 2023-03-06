import React from "react";
import { Button, Table } from "antd";
import { columns, data } from "./render";
import { useNavigate } from "react-router-dom";
const HomePageAdmin = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Homepage</h1>
      <div>Banner</div>
      <Button
        onClick={() => navigate("/admin/edit")}
        style={{ display: "flex", justifyContent: "end" }}
      >
        Thêm
      </Button>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default HomePageAdmin;
