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


const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number'
            || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number'
            || expense.createdAt <= endDate;

        const textMatch = expense.description.toLocaleLowerCase()
            .includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
    }).sort((firstExpense, secondExpense) => {
        switch (sortBy) {
            case 'date':
                return firstExpense.createdAt < secondExpense.createdAt
            case 'amount':
                return firstExpense.amount < secondExpense.amount
        }
    })
}

const store = createStore(
    combineReducers({expenses: expensesReducer, filters: filtersReducer})
)

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

    console.log(visibleExpenses)
})

const dispatchedExpense = store
    .dispatch(addExpense({description: 'RentinG', amount: 100, createdAt: 1000}))
store.dispatch(addExpense({
    description: 'Training',
    amount: 200,
    createdAt: -1000
}))


// store.dispatch(removeExpense(dispatchedExpense))
// store.dispatch(editExpense(dispatchedExpense.expense, {description: 'NewDescription'}))

// store.dispatch(setTextFilter('new-text-filter'))
// store.dispatch(setTextFilter())

store.dispatch(sortByAmount())
store.dispatch(sortByDate())
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
