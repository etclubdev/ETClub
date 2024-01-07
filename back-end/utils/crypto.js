import { createHash } from 'crypto'



export function sha256(content) {
    return createHash('sha256').update(content).digest('hex')
}
export function hashPassword(password) {
    return sha256(password + 'etclub20232023')
}
