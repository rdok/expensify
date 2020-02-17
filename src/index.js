import React from 'react';
import ReactDOM from 'react-dom'
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

console.log(store.getState())


store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

store.dispatch(addExpense({description: 'Water bill', amount: 100, createdAt: 1000}))
store.dispatch(addExpense({description: 'Gas bill', amount: 200, createdAt: 2000}))
store.dispatch(setTextFilter('gas'))

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

ReactDOM.render(<AppRouter/>, document.getElementById('root'))
