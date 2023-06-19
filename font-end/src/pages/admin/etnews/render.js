import React from "react";
import { Space } from "antd";

export const columns = (showModal, handleDelete) => {
  return [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
      render: (_, record) => <span>{record.id}</span>,
    },
    {
      title: "Tiêu đề",
      dataIndex: "name",
      key: "name",
      render: (_, record) => <span className='line-clamp-2'>{record.name}</span>,
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
      render: (_, record) => <span className='line-clamp-2'>{record.tiny_desc}</span>,
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
          <button onClick={() => showModal(record.id)} >Edit</button>
          <button onClick={() => {
            const yes = prompt("Bạn có chắc chắn muốn xóa bản tin ETNews này không??. Vui lòng gõ chữ y để đồng ý")
            if (['Y', 'y'].includes(yes)) {
              handleDelete(record.id)
            } else {
              alert('Bạn không nhập đúng chữ nên không xóa :)')
            }

          }} >Delete</button>
        </Space>
      ),
    },
  ];
};
