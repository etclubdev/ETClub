import React from "react";
import { Space } from "antd";
const toTypeSponsor = (type) => {
  switch (type) {
    case 1:
      return 'kim cương'
    case 2:
      return 'vàng'
    case 3:
      return 'bạc'
    case 4:
      return 'đồng'
    case 5:
      return 'truyền thông'
    case 6:
      return 'marketing'
    default:
      return 'Không có'
  }
}
export const columns = (handleDelete, showModal, dataCompetition) => {
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
      render: (_, record) => <span>{toTypeSponsor(record.kind)}</span>,
    },
    {
      title: "ID cuộc thi",
      dataIndex: "competition_id",
      key: "competition_id",
      render: (_, record) => <span>{dataCompetition?.find((item) => item.id == record.competition_id)?.name}</span>,
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
          <button onClick={() => {
            const yes = prompt("Bạn có chắc chắn muốn xóa nhà tài trợ này không??. Vui lòng gõ chữ y để đồng ý")
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
