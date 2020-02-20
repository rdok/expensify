import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import 'normalize.css/normalize.css'
import './styles/styles.sass'

import {addExpense, removeExpense, editExpense} from './actions/expenses'
import getVisibleExpenses from './selectors/expenses'


import AppRouter from './routers/AppRouter'

import {
    setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate
} from './actions/filters'
import configureStore from './store/configureStore'

const store = configureStore()

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
})

store.dispatch(setTextFilter('gas'))
store.dispatch(addExpense({description: 'Water bill', amount: 100, createdAt: 1000}))
store.dispatch(addExpense({description: 'Gas bill', amount: 200, createdAt: 2000}))

// store.dispatch(addExpense({
//     description: 'Training',
//     amount: 200,
//     createdAt: -1000
// }))


// store.dispatch(removeExpense(dispatchedExpense))
// store.dispatch(editExpense(dispatchedExpense.expense, {description: 'NewDescription'}))

// store.dispatch(setTextFilter())

// store.dispatch(sortByAmount())
// store.dispatch(sortByDate())
// store.dispatch(sortByAmount())

// store.dispatch(setTextFilter('notfound'))
// store.dispatch(setTextFilter('en'))
// store.dispatch(setTextFilter('ing'))

// store.dispatch(setStartDate(1150))
// store.dispatch(setStartDate(500))
// store.dispatch(setStartDate(-1001))
// store.dispatch(setEndDate(125))
// store.dispatch(setEndDate())
// store.dispatch(setStartDate())

// ReactDOM.render(<AppRouter/>, document.getElementById('root'))


const Info = ({info}) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)

const requireAuth = (WrappedComponent) => {
    return (props) => (
        <div>
            {
                props.isAuthenticated ? (<p>Redirect to auth page</p>)
                    : <WrappedComponent {...props}/>
            }

        </div>
    )
}

const AuthInfo = requireAuth(Info)

const jsx = (<Provider store={store}> <AppRouter/> </Provider>)

ReactDOM.render(jsx, document.getElementById('root'))
