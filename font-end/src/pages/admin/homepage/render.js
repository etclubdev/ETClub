import React from "react";
import { Space } from "antd";

export const columns = (handleDelete, showModal) => {
  return [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
      render: (_, record) => <span>{record.stt}</span>,
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Hình ảnh",
      dataIndex: "img",
      key: "img",
    },
    {
      title: "Link chuyển tiếp",
      key: "Link",
      dataIndex: "Link",
      render: (_, record) => (
        <>
          <Space>{record.link}</Space>
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size='middle'>
          <button onClick={() => showModal(record.stt)}>Edit</button>
          <button onClick={() => handleDelete(record.stt)}>Delete</button>
        </Space>
      ),
    },
  ];
};
