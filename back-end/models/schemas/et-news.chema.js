export default class EtNews {
    // Constructor để khởi tạo đối tượng
    constructor({ name, tiny_desc, full_news, image, link, category, created_at }) {

        this.name = name;
        this.tiny_desc = tiny_desc;
        this.full_news = full_news;
        this.image = image;
        this.link = link;
        this.category = category;
        this.created_at = created_at || new Date();
    }
}