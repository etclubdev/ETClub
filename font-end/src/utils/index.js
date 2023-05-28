import { ERDepartment } from '../data/er-department';
import { EventDepartment } from '../data/event-department';
import { HrDepartment } from '../data/hr-department';
import { PRDepartment } from '../data/pr-team';
import { TechDepartment } from '../data/tech-team';

export function ToDepartment(department) {
    switch (department) {
        case 'ban-nhan-su':
            return HrDepartment
        case 'ban-tech':
            return TechDepartment
        case 'ban-pr-ec':
            return PRDepartment
        case 'ban-er':
            return ERDepartment
        case 'ban-event':
            return EventDepartment
        default:
            return 'No data'
    }
}