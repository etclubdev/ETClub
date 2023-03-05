import React from "react";
import { Space, Table, Tag } from "antd";
export const columns = [
  {
    title: "STT",
    dataIndex: "stt",
    key: "stt",
    render: (_, record) => <span>{record.stt}</span>,
  },
  {
    title: "Tiêu đề",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Nội dung",
    dataIndex: "content",
    key: "content",
  },
  {
    title: "Hình ảnh",
    dataIndex: "picture",
    key: "picture",
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
    title: "Sự phát triển của công nghệ Blockchain",
    content:
      "Lorem Ipsum   is Lorem Ipsum  is Trans Lorem  Ipsum is Trans  trans   ngh",
    picture: "Ban tin ET.png",
    link: "acb.xyz.com",
  },
  {
    key: "2",
    stt: "2",
    title: "Sự phát triển của công nghệ Blockchain",
    content:
      "Lorem Ipsum   is Lorem Ipsum  is Trans Lorem  Ipsum is Trans  trans   ngh",
    picture: "Ban tin ET.png",
    link: "acb.xyz.com",
  },
  {
    key: "3",
    stt: "3",
    title: "Sự phát triển của công nghệ Blockchain",
    content:
      "Lorem Ipsum   is Lorem Ipsum  is Trans Lorem  Ipsum is Trans  trans   ngh",
    picture: "Ban tin ET.png",
    link: "acb.xyz.com",
  },
];
