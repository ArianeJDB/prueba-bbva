import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import ErrorMessage from '../errorMessage/ErrorMessage'
import { loginService } from '../../services/loginService'
import './login.css';

const Login = () => {
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const [loginError, setLoginError] = useState(false)

    const onSubmit = ({email, password}) => {
        loginService(email, password)
            .then(res => {
                storeEmail(res)
                history.push("/counter/" + res);
            })
            .catch(err => {
                setLoginError(true)
                console.error(err)
            })
    }
    const storeEmail = (email) => {
        if (!localStorage.getItem(email)) {
            localStorage.setItem(email, Date.now())
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email" className="hidden">Email</label>
            <input
                type="text"
                name="email"
                ref={register({ required: true, pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})}
            />
            {errors.email && <ErrorMessage errorMsg="El email es requerido" />}
            <label htmlFor="password" className="hidden">Contraseña</label>
            <input
                type="password"
                name="password"
                ref={register({ required: true, minLength: 6})}
            />
            {errors.password && errors.password.type === "required" && <ErrorMessage errorMsg="La contraseña es requerida" />
            }
             {errors.password && errors.password.type === "minLength" && <ErrorMessage errorMsg="La contraseña debe tener mínimo 6 caracteres" />
            }
            {
                loginError && <ErrorMessage errorMsg='Verifica que las credenciales son correctas' />
            }
            <button>Log in</button>
        </form>
    )
}

export default Login;