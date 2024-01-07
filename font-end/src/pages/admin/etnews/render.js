import React from "react";
import { Space } from "antd";
const options = [
  {
    value: 0,
    label: 'Tất cả'
  },
  {
    value: 1,
    label: 'Tin chính phủ số'
  },
  {
    value: 2,
    label: 'Tin công nghệ thế giới'
  },
  {
    value: 3,
    label: 'Tin công nghệ Việt Nam'
  },
  {
    value: 4,
    label: 'Tin tạo sự ảnh hưởng'
  },
]
export const columns = (showModal, handleDelete) => {
  const handleCategoryName = (status) => {
    switch (status) {
      case 0:
        return "Tất cả"
      case 1:
        return "Tin chính phủ số"
      case 2:
        return "Tin công nghệ thế giới"
      case 3:
        return "Tin công nghệ Việt Nam"
      case 4:
        return "Tin tạo sự ảnh hưởng"
      default:
        break;
    }
  }
  return [
    {
      title: "Tiêu đề",
      dataIndex: "name",
      key: "name",
      width: '300px',
      render: (_, record) => <span className='line-clamp-2'>{record.name}</span>,
    },
    {
      title: "Ảnh bìa",
      dataIndex: "image",
      key: "image",
      width: '100px',
      render: (_, record) => (
        <>
          <Space className='items-center w-full block'>
            <img className='w-full h-[100px] object-fill' src={record.image} alt={record.image} />
          </Space>
        </>
      ),
    },
    // {
    //   title: "Mô tả ngắn",
    //   dataIndex: "tiny_desc",
    //   key: "tiny_desc",
    //   render: (_, record) => <span className='line-clamp-2'>{record.tiny_desc}</span>,
    // },
    {
      title: "Thể loại",
      dataIndex: "category",
      key: "category",
      width: '200px',
      render: (_, record) => <span className=''>{handleCategoryName(record.category)}</span>,
    },
    {
      title: "Link chuyển tiếp",
      key: "Link",
      dataIndex: "Link",
      render: (_, record) => (
        <>
          <Space className='line-clamp-2'>{record.link}</Space>
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size='middle'>
          <button onClick={() => showModal(record._id)} >Edit</button>
          <button onClick={() => {
            const yes = prompt("Bạn có chắc chắn muốn xóa bản tin ETNews này không??. Vui lòng gõ chữ y để đồng ý")
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
