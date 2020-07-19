import moment from 'moment';
import uuid from 'uuid';
import { addExpense, editExpense, removeExpense } from '../../src/actions/expenses';

jest.mock('uuid');
uuid.mockImplementation(() => '2077');
jest.mock('moment', () => () => 'mockedMoment');

test('adds expense action', () => {
  const expense = {
    description: 'You control your fate by the fiction you choose.',
    note: ' Maecenas nec erat mauris. ',
    amount: 2059,
  };

  const expectedExpense = { id: '2077', createdAt: 'mockedMoment', ...expense };
  const action = addExpense(expense);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: { ...expectedExpense },
  });
});

test('edits expense action', () => {
  const data = {
    description: 'Reality',
    note: ' Maecenas',
    amount: 2059,
  };

  const expense = { id: '2077', createdAt: moment() };

  const action = editExpense(expense, data);

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    expense: { ...expense, ...data },
  });
});

test('removes expense action', () => {
  const action = removeExpense({ id: '2077' });

  expect(action).toEqual({
    id: '2077',
    type: 'REMOVE_EXPENSE',
  });
});
