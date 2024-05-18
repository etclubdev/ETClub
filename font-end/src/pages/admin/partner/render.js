import React from "react";
import { Space } from "antd";
export const columns = [
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
        <span>Edit</span>
        <span>Delete</span>
      </Space>
    ),
  },
];
export const data = [
  {
    key: "1",
    stt: "1",
    description: "Cuộc thi Techconomy 2022",
    img: "Techconomy.png",
    link: "acb.xyz.com",
  },
  {
    key: "2",
    stt: "2",
    description: "Cuộc thi Techconomy 2022",
    img: "Techconomy.png",
    link: "acb.xyz.com",
  },
  {
    key: "3",
    stt: "3",
    description: "Cuộc thi Techconomy 2022",
    img: "Techconomy.png",
    link: "acb.xyz.com",
  },
];
