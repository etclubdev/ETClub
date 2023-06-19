import React from "react";
import { Space } from "antd";
import competitionApi from '../../../api/competitionApi';
// import { getNameCompetition } from '../../../utils';
const toType = (type) => {
  switch (type) {
    case 2:
      return 'Nhóm'
    case 1:
      return 'Cá nhân'
    default:
      return 'Không có'
  }
}

export const columns = (handleDelete, showModal, dataCompetition) => {

  return [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },

    {
      title: "ID cuộc thi",
      dataIndex: "competition_id",
      key: "competition_id",
      render: (_, record) => <span>{dataCompetition?.find((item) => item.id == record.competition_id)?.name}</span>,
    },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Ngành",
      dataIndex: "major",
      key: "major",
    },
    {
      title: "Khóa",
      key: "academic_year",
      dataIndex: "academic_year",
    },
    {
      title: "Đội",
      key: "team",
      dataIndex: "team",
    },
    {
      title: "Hạng",
      key: "rank",
      dataIndex: "rank",
    },
    {
      title: "Trường",
      key: "school",
      dataIndex: "school",
    },
    {
      title: "Loại",
      key: "type",
      dataIndex: "type",
      render: (_, record) => <span>{toType(record.type)}</span>,
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size='middle'>
          <button onClick={() => showModal(record.id)}>Edit</button>
          <button onClick={() => {
            const yes = prompt("Bạn có chắc chắn muốn xóa kết quả cuộc thi này không??. Vui lòng gõ chữ y để đồng ý")
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
