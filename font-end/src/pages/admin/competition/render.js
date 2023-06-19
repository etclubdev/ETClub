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
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Tên cuộc thi",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Ảnh ngang",
      dataIndex: "landscape_poster",
      key: "landscape_poster",
    },
    {
      title: "Ảnh dọc",
      key: "portrait_poster",
      dataIndex: "portrait_poster",
    },
    // {
    //   title: "Nội dung recap",
    //   key: "lookback_script",
    //   dataIndex: "lookback_script",
    // },
    // {
    //   title: "Ảnh recap",
    //   key: "lookback_img",
    //   dataIndex: "lookback_img",
    // },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size='middle'>
          <button onClick={() => showModal(record.id)}>Edit</button>
          <button onClick={() => {
            const yes = prompt("Bạn có chắc chắn muốn xóa cuộc thi này không??. Vui lòng gõ chữ y để đồng ý")
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
