import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";

import Login from './pages/Login/Login'
import RegisterPage from './pages/Register/RegisterPage'
import LandingPage from './pages/LandingPage/LandingPage'

import NavBar from './components/Navbar/NavBar'
import Footer from './components/Footer/Footer'

import GlobalStyle from './style/global'
import { ThemeProvider } from 'styled-components'
import theme from './mocks/Color'


function Routes() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <NavBar type="landing_page" />
                    <Switch>
                        <Route path="/" exact component={LandingPage}></Route>
                        <Route path="/login" component={Login}></Route>
                    </Switch>
                    <GlobalStyle />
                    <Footer />
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}

export default Routes;