import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from "./components/Login";
import Signup from "./components/Signup";

import SecuredRoute from './components/SecuredRoute';

import Dashboard from "./components/Dashboard/Dashboard";
import PageNotFound from './components/PageNotFound';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact={true}> <Redirect to='/dashboard' /> </Route>
                <SecuredRoute path='/dashboard' component={Dashboard} />
                <Route path='/login'> <Login /> </Route>
                <Route path='/signup'> <Signup /> </Route>
                <Route> <PageNotFound /> </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App