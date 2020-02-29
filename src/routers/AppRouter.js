import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import {
    DashboardPage, HelpPage, NotFoundPage,
    Header
} from './../components/index'
import EditExpensePage from "../components/EditExpensePage"

import AddExpensePage from "../components/AddExpensePage"

const AppRouter = () => (
    <BrowserRouter basename={BASENAME}>
        <div>
            <Header/>
        </div>
        <Switch>
            <Route path="/" component={DashboardPage} exact={true}/>
            <Route path="/index.html" component={DashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/edit/:id" component={EditExpensePage}/>
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </BrowserRouter>
)

export default AppRouter
