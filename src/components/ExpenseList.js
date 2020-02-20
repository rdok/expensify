import React from 'react';
import {connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

const ExpenseList = ({expenses}) => (
    <div>
        <h2> Expense List </h2>
        {expenses.map((expense) => (
            <ExpenseListItem key={expense.id} {...expense} />
        ))}
    </div>
)

const mapStateToProps = ({expenses, filters}) => ({
    expenses: selectExpenses(expenses, filters)
})

export default connect(mapStateToProps)(ExpenseList)

