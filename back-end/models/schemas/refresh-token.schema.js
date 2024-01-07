export default class RefreshToken {

    constructor({ token, created_at, user_id, exp, iat }) {

        this.token = token
        this.created_at = created_at || new Date()
        this.user_id = user_id
        this.exp = new Date(exp * 1000)
        this.iat = new Date(iat * 1000)
    }
}
