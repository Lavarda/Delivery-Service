//import axios, { AxiosRequestConfig } from 'axios';

export interface Credentials {
    username: string,
    password: string,
}

interface LoginApiResponse {
    // respostas do back-end para validar
    created: string,
    id: string,
    token: string,
    username: string,
}

export const onLogin = async (data: Credentials) => {
    // const requestConfig:AxiosRequestConfig = {
    //    method: 'post',
    //    url: process.env.REACT_APP_API_BASE_URL + '/login',
    //     data
    //  }

    // try {
    // const { data: response } = await Axios.request(requestConfig);
    // } catch (e) {
    //    console.error(e.response)
    //    return { error: e.response.data.message }
    // }

    console.log(data)
}

export const onRegister = async (data: Credentials) => {
    //const requestConfig:AxiosRequestConfig = {
    //    method: 'post',
    //    url: process.env.REACT_APP_API_BASE_URL + '/register',
    //    data
    // }

    //try {
        //const { data: response } = await Axios.request(requestConfig);
    //} catch (e) {
    //    console.error(e.response)
    //    return { error: e.response.data.message }
    //}

    console.log(data)
}
