import React from "react";
import { Space } from "antd";

export const columns = (handleDelete, showModal, dataCompetition) => {

  return [

    {
      title: "Tên vòng thi",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Ngày bắt đầu",
      dataIndex: "start_date",
      key: "start_date",
    },
    {
      title: "Ngày kết thúc",
      dataIndex: "end_date",
      key: "end_date",
    },
    {
      title: "ID cuộc thi",
      dataIndex: "competition_id",
      key: "competition_id",
      render: (_, record) => <span>{dataCompetition?.find(item => item.id == record.competition_id)?.name}</span>
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size='middle'>
          <button onClick={() => showModal(record.id)}>Edit</button>
          <button onClick={() => {
            const yes = prompt("Bạn có chắc chắn muốn xóa vòng thi này không??. Vui lòng gõ chữ y để đồng ý")
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
