import React from "react";
import { Space } from "antd";

export const columns = (handleDelete, showModal) => {
  return [
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
      render: (_, record) => (
        <>
          <Space className='items-center w-full block'>
            <img className='w-full h-[100px] object-fill' src={record.avatar} alt={record.avatar} />
          </Space>
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size='middle'>
          <button onClick={() => showModal(record._id)}>Edit</button>
          <button onClick={() => {
            const yes = prompt("Bạn có chắc chắn muốn xóa cảm nghĩ này không??. Vui lòng gõ chữ y để đồng ý")
            if (['Y', 'y'].includes(yes)) {
              handleDelete(record._id)
            } else {
              alert('Bạn không nhập đúng chữ nên không xóa :)')
            }

          }} >Delete</button>
        </Space>
      ),
    },
  ];
};
