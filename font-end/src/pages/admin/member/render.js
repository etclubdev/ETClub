import React from "react";
import { Space } from "antd";
// enum department
// 0: bcn 
// 1: er 
// 2: event 
// 3: hr 
// 4: pr 
// 5: tech

// enum type
// 0: president 
// 1: vice_president
// 2: members 

// enum term 
//0: nk1
//1: nk2
//2: nk3
//3: nk4
//4: nk5
///
export const columns = (handleDelete, showModal, dataTerms) => {

    const handleTypeName = (type) => {
        switch (type) {
            case 0:
                return 'Trưởng ban'
            case 1:
                return 'Phó ban'
            case 2:
                return 'Thành viên'
            case 3:
                return 'Chủ nhiệm'
            case 4:
                return 'Phó chủ nhiệm'
            case 5:
                return 'Thành viên chủ nhiệm'
            default:
                break;
        }
    }

    const handleDepartmentName = (department) => {
        switch (department) {
            case 0:
                return 'Ban chủ nhiệm'
            case 1:
                return 'Tài chính đối ngoại'
            case 2:
                return 'Sự kiện'
            case 3:
                return 'Nhân sự'
            case 4:
                return 'Truyền thông'
            case 5:
                return 'Kỹ thuật công nghệ'
            default:
                break;
        }
    }


    return [
        {
            title: "Tên",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Hình ảnh",
            dataIndex: "image",
            key: "image",

            render: (_, record) => (
                <>
                    <Space className='items-center w-full block'>
                        <img className='w-full h-[100px] object-fill' src={record.image} alt={record.image} />
                    </Space>
                </>
            ),
        },
        {
            title: "Ban",
            dataIndex: "department",
            key: "department",
            render: (_, record) => (
                <>
                    <Space className='items-center w-full block'>
                        {record.department.map((item) => {
                            return handleDepartmentName(item)
                        })}
                    </Space>
                </>
            ),
        },
        {
            title: "Vị trí",
            dataIndex: "type",
            key: "type",
            render: (_, record) => (
                <>
                    <Space className='items-center w-full block'>
                        {record.type.map((item) => {
                            return handleTypeName(item)
                        })}
                    </Space>
                </>
            ),
        },
        {
            title: "Nhiệm kỳ",
            dataIndex: "terms",
            key: "terms",
            render: (_, record) => (
                <>
                    <Space className='items-center w-full block'>
                        {record.terms.map((item) => {
                            return dataTerms.find((x) => x._id === item)?.name
                        })}
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
