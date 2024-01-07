

export default class Competition {
    // Constructor để khởi tạo đối tượng
    constructor({ name, status, landscape_poster, portrait_poster, lookback_script, content, date, end_date }) {

        this.name = name;
        this.status = status;
        this.landscape_poster = landscape_poster;
        this.portrait_poster = portrait_poster;
        this.lookback_script = lookback_script;
        this.content = content;
        this.date = date
        this.end_date = end_date;
    }
}