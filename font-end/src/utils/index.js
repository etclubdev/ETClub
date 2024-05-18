
import { ERDepartment } from '../data/er-department';
import { EventDepartment } from '../data/event-department';
import { HrDepartment } from '../data/hr-department';
import { PRDepartment } from '../data/pr-team';
import { TechDepartment } from '../data/tech-team';
import { notification } from 'antd'
// enum department
// 0: bcn 
// 1: er 
// 2: event 
// 3: hr 
// 4: pr 
// 5: tech
export function ToDepartment(department) {
    switch (department) {
        case 'ban-nhan-su':
            return 3
        case 'ban-tech':
            return 5
        case 'ban-pr':
            return 4
        case 'ban-er':
            return 1
        case 'ban-event':
            return 2
        default:
            return 'No data'
    }
}
export function ToDepartmentName(departmentId) {
    switch (departmentId) {
        case 0:
            return 'Ban chủ nhiệm'
        case 1:
            return 'Ban Tài chính - Đối ngoại'
        case 2:
            return 'Ban Sự kiện'
        case 3:
            return 'Ban Nhân sự'
        case 4:
            return 'Ban Truyền thông'
        case 5:
            return 'Ban Kỹ thuật - Công nghệ'
        default:
            return 'Nodata'
    }
}
export function ToDepartmentData(departmentId) {
    switch (departmentId) {
        // case 0:
        //     return 'Ban chủ nhiệm'
        case 1:
            return ERDepartment
        case 2:
            return EventDepartment
        case 3:
            return HrDepartment
        case 4:
            return PRDepartment
        case 5:
            return TechDepartment
        default:
            return 'Nodata'
    }
}
export const openNotification = ({ message, key, title, duration, type }) => {
    notification.destroy();
    notification[type]({
        key: key,
        message: title || 'Thông báo',
        description: message,
        duration: duration || 4.5
    });

};

