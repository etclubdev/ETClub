import React from "react";
import { Space } from "antd";

export const columns = (handleDelete, showModal) => {
  return [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      // render: (_, record) => <span>{record.id}</span>,
    },
    {
      title: "Tên đối tác",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Logo",
      dataIndex: "logo",
      key: "logo",
    },
    {
      title: "Thể loại",
      dataIndex: "kind",
      key: "kind",
    },
    {
      title: "ID cuộc thi",
      dataIndex: "competition_id",
      key: "competition_id",
    },
    // {
    //   title: "Link chuyển tiếp",
    //   key: "Link",
    //   dataIndex: "Link",
    //   render: (_, record) => (
    //     <>
    //       <Space>{record.link}</Space>
    //     </>
    //   ),
    // },
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
