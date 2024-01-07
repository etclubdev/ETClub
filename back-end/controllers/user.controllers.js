import usersService from '../services/user-services.js'
import { hashPassword } from '../utils/crypto.js'
import databaseService from '../utils/db.js'

export const registerController = async (req, res) => {
    try {
        const result = await usersService.register(req.body)
        res.json({
            message: 'register successfully',
            result
        })
    } catch (err) {
        console.log(err)
    }
}
export const loginController = async (req, res) => {
    try {
        const user = await databaseService.users.findOne({
            username: req.body.username,
            password: hashPassword(req.body.password)
        })
        if (user === null) {
            return res.status(404).json({
                message: "Không tìm thấy user",
            })
        }
        const user_id = user._id
        const result = await usersService.login({ user_id: user_id.toString() })
        return res.json({
            message: 'login successfully',
            result
        })
    } catch (err) {
        console.log(err)
    }
}
export const logoutController = async (req, res) => {
    try {
        const { refresh_token } = req.body
        const result = await usersService.logout(refresh_token)
        return res.json(result)
    }
    catch (err) {
        console.log(err)
    }
}