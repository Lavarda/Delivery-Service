import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from './pages/Login'
import RegisterPage from './pages/RegisterPage'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}></Route>
                <Route path="/register" component={RegisterPage}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;