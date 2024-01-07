import React from "react";
import { Space } from "antd";

export const columns = (handleDelete, showModal) => {
  return [
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Hình ảnh",
      dataIndex: "img",
      key: "img",
      render: (_, record) => (
        <>
          <Space className='items-center w-full block'>
            <img className='w-full h-[100px] object-fill' src={record.img} alt={record.img} />
          </Space>
        </>
      ),
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
          <button onClick={() => showModal(record._id)}>Edit</button>
          <button onClick={() => {
            const yes = prompt("Bạn có chắc chắn muốn xóa banner này không??. Vui lòng gõ chữ y để đồng ý")
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
