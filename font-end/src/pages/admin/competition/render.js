import React from "react";
import { Space } from "antd";

export const columns = (handleDelete, showModal) => {
  const handleStatusName = (status) => {
    switch (status) {
      case 0:
        return 'Sắp diễn ra'
      case 1:
        return 'Đang diễn ra'
      case 2:
        return 'Đã diễn ra'
      default:
        break;
    }
  }
  return [

    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (_, record) => (
        <>
          <Space className=''>
            {handleStatusName(record?.status)}
          </Space>
        </>
      ),
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
      render: (_, record) => (
        <>
          <Space className='items-center w-full block'>
            <img className='w-full h-[100px] object-fill' src={record.landscape_poster} alt={record.landscape_poster} />
          </Space>
        </>
      ),
    },
    {
      title: "Ảnh dọc",
      key: "portrait_poster",
      dataIndex: "portrait_poster",
      render: (_, record) => (
        <>
          <Space className='items-center w-full block'>
            <img className='w-[70%] h-[150px] object-contain' src={record.portrait_poster} alt={record.portrait_poster} />
          </Space>
        </>
      ),
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
          <button onClick={() => showModal(record._id)}>Edit</button>
          <button onClick={() => {
            const yes = prompt("Bạn có chắc chắn muốn xóa cuộc thi này không??. Vui lòng gõ chữ y để đồng ý")
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
