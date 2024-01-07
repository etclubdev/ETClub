

export default class
    CompetitionResult {
    // Constructor để khởi tạo đối tượng
    constructor({ competition_id, name, major, academic_year, team, rank, school, type, avt, logo_team }) {

        this.name = name;
        this.competition_id = competition_id;
        this.major = major;
        this.academic_year = academic_year;
        this.team = team;
        this.rank = rank;
        this.school = school;
        this.type = type;
        this.avt = avt;
        this.logo_team = logo_team;
    }
}