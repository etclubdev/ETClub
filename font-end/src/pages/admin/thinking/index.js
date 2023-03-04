import React from "react";
import { Button, Table } from "antd";
import { columns, data } from "./render";
const ThinkingAdmin = () => {
  return (
    <div>
      <div>Cảm nghĩ</div>
      <Button style={{ display: "flex", justifyContent: "end" }}>Thêm</Button>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default ThinkingAdmin;
