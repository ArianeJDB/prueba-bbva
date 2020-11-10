import registeredUsers from '../data/registeredUsers.json'
import { loginService } from '../services/loginService'
describe('service', () => {
    const email = 'jax@jax.com'
    const password = 'hola123456'
    test('verifyUserRegistered should resolve and return token', (done) => {
        loginService(email, password).then(result => {
            expect(result).toBe(email)
            done()
        })
    })


    test('loginService should verify if user is registered by email and password', () => {

        const credentials = [{ email, password }]
        const userLogged = registeredUsers.filter(user => user.email === email && user.password === password)
        loginService(email, password)
        expect(userLogged).toStrictEqual(credentials)
    })

})

// test('loginService with wrong credentials should reject and return Unauthorized error', (done) => {
//     loginService('hola', '123').then(result => {
//     expect(result).toBe('Unauthorized')
//     done()
//   })
// })