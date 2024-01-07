
// enum department
// 0: bcn 
// 1: er 
// 2: event 
// 3: hr 
// 4: pr 
// 5: tech

// enum type
// 0: lead 
// 1: vice_lead
// 2: members 
// 3: president
// 4: vice_president
// 5: member_president

// enum term 
//0: nk1
//1: nk2
//2: nk3
//3: nk4
//4: nk5
///

export default class Member {
    // Constructor để khởi tạo đối tượng
    constructor({ name, image, type, department, terms }) {

        this.name = name;
        this.image = image;
        this.type = type;
        this.department = department;
        this.terms = terms;
    }
}