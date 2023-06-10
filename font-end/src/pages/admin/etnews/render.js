import React from "react";
import { Space } from "antd";

export const columns = () => {
  return [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
      render: (_, record) => <span>{record.stt}</span>,
    },
    {
      title: "Tiêu đề",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Ảnh bìa",
      dataIndex: "image",
      key: "image",
    },
    {
      title: "Mô tả ngắn",
      dataIndex: "tiny_desc",
      key: "tiny_desc",
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
          <button >Edit</button>
          <button >Delete</button>
        </Space>
      ),
    },
  ];
};
