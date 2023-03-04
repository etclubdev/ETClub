import React from "react";
import { Button, Table } from "antd";
import { columns, data } from "./render";
const Partner = () => {
  return (
    <div>
      <div>Đối tác đồng hành</div>
      <Button style={{ display: "flex", justifyContent: "end" }}>Thêm</Button>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Partner;
