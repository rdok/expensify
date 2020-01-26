import React from 'react';
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.sass'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'

const DashboardPage = () => (<div>Dashboard Content</div>)
const AddExpensePage = () => (<div>Add Expense Content</div>)
const EditExpensePage = () => (<div>Edit Expense Content</div>)
const HelpPage = () => (<div>Help Content</div>)
const NotFoundPage = () => (<div>Not Found</div>)

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>
            Dashboard
        </NavLink>
        <NavLink to="/create" activeClassName="is-active">Create</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
)

const routes = (
    <BrowserRouter>
        <div>
            <Header/>
        </div>
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
