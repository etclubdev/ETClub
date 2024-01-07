import RefreshToken from '../models/schemas/refresh-token.schema.js'
import User from '../models/schemas/user.schema.js'
import { hashPassword } from '../utils/crypto.js'
import databaseService from '../utils/db.js'
import { signToken, verifyToken } from '../utils/jwt.js'
import { ObjectId } from 'mongodb'
class UsersService {
    signAccessToken({ user_id }) {
        return signToken({
            payload: {
                user_id,
                token_type: 0,

            },
            privateKey: 'etclub2023',
            options: {
                expiresIn: "1d"
            }
        })
    }
    signRefreshToken({ user_id, exp }) {
        if (exp) {
            return signToken({
                payload: {
                    user_id,
                    token_type: 1,
                    exp
                },
                privateKey: 'etclub2023aa'
            })
        }
        return signToken({
            payload: {
                user_id,
                token_type: 1

            },
            privateKey: 'etclub2023aa',
            options: {
                expiresIn: "100d"
            }
        })
    }
    signAccessAndRefreshToken({ user_id }) {
        return Promise.all([this.signAccessToken({ user_id }), this.signRefreshToken({ user_id })])
    }
    decodeRefreshToken(refresh_token) {
        return verifyToken({
            token: refresh_token,
            secretOrPublicKey: 'etclub2023aa'
        })
    }
    async register(payload) {
        const user_id = new ObjectId()
        await databaseService.users.insertOne(
            new User({
                ...payload,
                _id: user_id,
                password: hashPassword(payload.password)
            })
        )

        const [access_token, refresh_token] = await this.signAccessAndRefreshToken({
            user_id: user_id.toString(),
        })
        const { iat, exp } = await this.decodeRefreshToken(refresh_token)
        await databaseService.refreshTokens.insertOne(
            new RefreshToken({
                user_id: new ObjectId(user_id),
                token: refresh_token,
                iat,
                exp
            })
        )
        return {
            access_token,
            refresh_token
        }
    }
    async login({ user_id }) {
        const [access_token, refresh_token] = await this.signAccessAndRefreshToken({ user_id })
        const { iat, exp } = await this.decodeRefreshToken(refresh_token)
        await databaseService.refreshTokens.insertOne(
            new RefreshToken({
                user_id: new ObjectId(user_id),
                token: refresh_token,
                iat,
                exp
            })
        )
        return {
            access_token,
            refresh_token
        }
    }
    async logout(refresh_token) {
        await databaseService.refreshTokens.deleteOne({ token: refresh_token })
        return {
            message: 'logout successfully'
        }
    }
    async refreshToken({
        user_id,

        refresh_token,
        exp
    }) {
        const [new_access_token, new_refresh_token] = await Promise.all([
            this.signAccessToken({ user_id }),
            this.signRefreshToken({ user_id, exp }),
            databaseService.refreshTokens.deleteOne({ token: refresh_token })
        ])
        const { iat } = await this.decodeRefreshToken(new_refresh_token)
        await databaseService.refreshTokens.insertOne(
            new RefreshToken({
                user_id: new ObjectId(user_id),
                token: new_refresh_token,
                exp,
                iat
            })
        )
        return {
            access_token: new_access_token,
            refresh_token: new_refresh_token
        }
    }
}
const usersService = new UsersService();
export default usersService