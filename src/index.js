import React from 'react';
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.sass'
import {
    expensesReducer, addExpense, removeExpense, editExpense
} from './reducers/expenses'
import {
    filtersReducer, setTextFilter, sortByAmount, sortByDate,
    setStartDate, setEndDate
} from './reducers/filters'

import {createStore, combineReducers} from 'redux'
import AppRouter from './routers/AppRouter'

const store = createStore(
    combineReducers({expenses: expensesReducer, filters: filtersReducer})
)

store.subscribe(() => {
    console.log(store.getState().filters)
})

// const dispatchedExpense = store
//     .dispatch(addExpense({description: 'Rent', amount: 100}))
// store.dispatch(removeExpense(dispatchedExpense))
// store.dispatch(editExpense(dispatchedExpense.expense, {description: 'NewDescription'}))

// store.dispatch(setTextFilter('new-text-filter'))
// store.dispatch(setTextFilter())

// store.dispatch(sortByAmount())
// store.dispatch(sortByDate())
// store.dispatch(sortByAmount())

store.dispatch(setStartDate(115))
store.dispatch(setEndDate(125))
store.dispatch(setEndDate())
store.dispatch(setStartDate())

ReactDOM.render(<AppRouter/>, document.getElementById('root'))
