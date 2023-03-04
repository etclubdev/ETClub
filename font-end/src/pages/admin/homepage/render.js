import React from "react";
import { Space, Table, Tag } from "antd";
export const columns = [
  {
    title: "STT",
    dataIndex: "stt",
    key: "stt",
    render: (_, record) => <a style={{ color: "black" }}>{record.stt}</a>,
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
        <a>Invite {record.name}</a>
        <a>Delete</a>
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
