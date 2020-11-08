import registeredUsers from '../data/registeredUsers.json'
import { token } from '../data/token'


export function loginService(email, password) {

    const userLogged = registeredUsers.filter(user => user.email === email && user.password === password)

    return new Promise((resolve, reject) => {
        if (userLogged.length === 0) {
            setTimeout(() => reject(new Error('Unauthorized')), 1000)
        } else {
            setTimeout(() => resolve(token), 1000)
        }
    })
}
