import React, { useState } from 'react';
import { onRegister } from '../../api/auth_api';
import { AuthForm } from '../Login/LoginStyled';

const RegisterPage = () => {

    const [ { username, password, repeatPassword }, setRegisterData ] = useState({
        username: '',
        password: '',
        repeatPassword: '',
    })
    
    const [ error, setError ] = useState('');

    const register = async (event: React.FormEvent) => {
        event.preventDefault()

        console.log("REGISTER")
        if ( password === repeatPassword ) {
            // chamada para registro na api
            const response = await onRegister({
                username,
                password,
            })

            setError('')
        } else {
            setError('Password and repeat password do not match')
        }

        //if ( response && repsonse.error) {
        //    setError(response.error)
        //}
    }
    
    return (
        <AuthForm onSubmit={register}>
            <label htmlFor="username">Username</label>
            <input placeholder="Username" value={username} onChange={ (event) => setRegisterData({
                username: event.target.value,
                password,
                repeatPassword,
            })}></input>
            <label htmlFor="password">Username</label>
            <input placeholder="Password" value={password} type="password" onChange={ (event) => setRegisterData({
                username,
                password: event.target.value,
                repeatPassword,
            })}></input>
            <label htmlFor="repeatPassword">Repeat Password</label>
            <input placeholder="Repeat Password" value={repeatPassword} type="password" onChange={ (event) => setRegisterData({
                username,
                password,
                repeatPassword: event.target.value,
            })}></input>

            <button type="submit"> Register </button>

            {error.length > 0 && <p>{error}</p> }
        </AuthForm>
    );
}

export default RegisterPage;