import React from 'react';
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.sass'
import {BrowserRouter, Route} from 'react-router-dom'

const DashboardPage = () => (<div>Dashboard Content</div>)
const AddExpensePage = () => (<div>Add Expense Content</div>)
const EditExpensePage = () => (<div>Edit Expense Content</div>)
const HelpPage = () => (<div>Help Content</div>)

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={DashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/edit" component={EditExpensePage}/>
            <Route path="/help" component={HelpPage}/>
        </div>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('root'))
