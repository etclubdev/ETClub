import React from "react";
import { Space } from "antd";

export const columns = (handleDelete, showModal) => {
  return [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Quote",
      dataIndex: "quote",
      key: "quote",
    },
    {
      title: "Tác giả",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Ban",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "Ảnh đại diện",
      dataIndex: "avatar",
      key: "avatar",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size='middle'>
          <button onClick={() => showModal(record.id)}>Edit</button>
          <button onClick={() => handleDelete(record.id)}>Delete</button>
        </Space>
      ),
    },
  ];
};
