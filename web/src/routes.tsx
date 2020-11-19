import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";

import Login from './pages/Login'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/Home'

import GlobalStyle from './Styles/global'
import { ThemeProvider } from 'styled-components'
import theme from './mocks/Color'


function Routes() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={HomePage}></Route>
                </Switch>
                <GlobalStyle />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default Routes;