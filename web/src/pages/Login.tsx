import React, { useState } from 'react';
import { AuthForm, ContainerLogin, TextToRegister } from '../Styles/LoginStyled';
import { ContainerButtons } from '../Styles/ButtonsStyled';
import { onLogin } from '../api/auth_api';
import { Link } from 'react-router-dom';

function Login() {

    const [ { username, password }, setCredentials] = useState({
        username: '',
        password: '',
    })

    const [ error, setError ] = useState('');

    const login = async (event: React.FormEvent) => {
        event.preventDefault()

        const response = await onLogin({
            username,
            password,
        })

        //if ( !response ) {
        //    setError(response)
        //}
    }

    return (
        <ContainerLogin>
            <AuthForm>
                <label htmlFor="username">Username</label>
                <input placeholder="Username" value={username} onChange={ (event) => setCredentials({
                    username: event.target.value,
                    password
                })}></input>

                <label htmlFor="password">Password</label>
                <input placeholder="Password" type="password" value={password} onChange={ (event) => setCredentials({
                    username,
                    password: event.target.value,
                })}></input>


                <ContainerButtons>
                    <button onClick={login}>Login</button>
                </ContainerButtons>
                
            </AuthForm>

            {error.length > 0 && <p>{error}</p> }

            <TextToRegister>
                Need a account?  <Link to="/register">Register</Link>
            </TextToRegister>
        </ContainerLogin>
    )
}
export default Login;
