import React from 'react';
import ExpenseList from './ExpenseList';
import ExpensesListFilter from './ExpensesListFilter';

const DashboardPage = () => (
  <div>
    <ExpensesListFilter />
    <ExpenseList />
  </div>
);

export default DashboardPage;
