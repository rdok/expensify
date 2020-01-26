import React from 'react';
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.sass'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

const DashboardPage = () => (<div>Dashboard Content</div>)
const AddExpensePage = () => (<div>Add Expense Content</div>)
const EditExpensePage = () => (<div>Edit Expense Content</div>)
const HelpPage = () => (<div>Help Content</div>)
const NotFoundPage = () => (<div>Not Found Content</div>)

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={DashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/edit" component={EditExpensePage}/>
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('root'))
