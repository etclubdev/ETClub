export default class User {
    // Constructor để khởi tạo đối tượng
    constructor({ _id, username, password }) {
        this._id = _id;
        this.username = username;
        this.password = password;
    }
}