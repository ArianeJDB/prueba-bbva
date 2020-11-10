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

    const onSubmit = ({ email, password }) => {
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
        <div className="login_container">
            <i className="fa fa-lock"></i>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email" className="hidden">Email</label>
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    ref={register({ required: true, pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })}
                />
                {errors.email && <ErrorMessage errorMsg="Email is required" />}
                <label htmlFor="password" className="hidden">Contraseña</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    ref={register({ required: true, minLength: 6 })}
                />
                {errors.password && errors.password.type === "required" && <ErrorMessage errorMsg="Password is required" />
                }
                {errors.password && errors.password.type === "minLength" && <ErrorMessage errorMsg="Password must be 6 characters min length" />
                }
                {
                    loginError && <ErrorMessage errorMsg='Check if the credentials are correct' />
                }
                <button>Log in</button>
            </form>
        </div>
    )
}

export default Login;