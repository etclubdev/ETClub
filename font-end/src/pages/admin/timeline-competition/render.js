import React from "react";
import { Space } from "antd";
import dayjs from 'dayjs';

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
      render: (_, record) => <span>{dayjs(record?.start_date).format('DD/MM/YYYY')}</span>
    },
    {
      title: "Ngày kết thúc",
      dataIndex: "end_date",
      key: "end_date",
      render: (_, record) => <span>{record?.end_date !== null ? dayjs(record?.end_date).format('DD/MM/YYYY') : "--"}</span>
    },
    {
      title: "Cuộc thi",
      dataIndex: "competition_id",
      key: "competition_id",
      render: (_, record) => <span>{dataCompetition?.find(item => item._id == record.competition_id)?.name}</span>
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size='middle'>
          <button onClick={() => showModal(record._id)}>Edit</button>
          <button onClick={() => {
            const yes = prompt("Bạn có chắc chắn muốn xóa vòng thi này không??. Vui lòng gõ chữ y để đồng ý")
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
