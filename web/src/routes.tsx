import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";

import Login from './pages/Login/Login'
import RegisterPage from './pages/Register/RegisterPage'
import LandingPage from './pages/LandingPage/LandingPage'

import GlobalStyle from './style/global'
import { ThemeProvider } from 'styled-components'
import theme from './mocks/Color'


function Routes() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={LandingPage}></Route>
                    <Route path="/login" component={Login}></Route>
                </Switch>
                <GlobalStyle />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default Routes;