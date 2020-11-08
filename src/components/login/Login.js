import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import ErrorMessage from '../errorMessage/ErrorMessage'
import { loginService } from '../../services/loginService'
import './login.css';


const Login = () => {
    const history = useHistory();
    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [loginError, setLoginError] = useState(false)

    const handleEmailChange = (e) => {
        setEmailValue(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPasswordValue(e.target.value)
    }

    const handleLogin = (e) => {
        e.preventDefault();
        loginService(emailValue, passwordValue)
            .then(res => {
                localStorage.setItem('token', res)
                history.push("/counter");
            })
            .catch(err => {
                setLoginError(true)
                console.error(err)
            })
        
    }

    return (
        <form onSubmit={ handleLogin }>
            <label htmlFor="email" className="hidden">Email</label>
            <input
                type="text"
                value={emailValue}
                onChange={handleEmailChange}
            />
            <label htmlFor="password" className="hidden">Contraseña</label>
            <input
                type="password"
                value={passwordValue}
                onChange={handlePasswordChange}
            />
            {
                loginError && <ErrorMessage errorMsg='Verifica que las credenciales son correctas' />
            }
          
            <button>Log in</button>
        </form>

    )
}

export default Login;