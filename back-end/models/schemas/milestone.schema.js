export default class Milestone {
    // Constructor để khởi tạo đối tượng
    constructor({ competition_id, name, start_date, end_date }) {

        this.name = name;
        this.competition_id = competition_id;
        this.start_date = start_date;
        this.end_date = end_date;
    }
}