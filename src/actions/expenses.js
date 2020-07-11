import uuid from 'uuid';
import moment from 'moment';

export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense: { id: uuid(), createdAt: moment(), ...expense },
});

export const editExpense = (expense, data) => ({
  type: 'EDIT_EXPENSE',
  expense: { id: expense.id, createdAt: expense.createdAt, ...data },
});

export const removeExpense = ({ id }) => ({ type: 'REMOVE_EXPENSE', id });
