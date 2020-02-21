import React from 'react';
import ExpenseList from './ExpenseList'
import ExpensesListFilter from './ExpensesListFilter'

export const DashboardPage = () => (
    <div>
        <ExpensesListFilter />
        <ExpenseList/>
    </div>
)
