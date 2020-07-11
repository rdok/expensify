import moment from 'moment';
import selectExpenses from '../../src/selectors/expenses';

const expenses = [
  {
    id: '1990',
    description: 'DescriptionIpsum',
    note: 'NoteIpsum',
    amount: 25400000000,
    createdAt: moment().day(20).month(7).year(1990),
  },
  {
    id: '2025',
    description: 'Cyberpunk2077',
    note: 'Delayed',
    amount: 5000,
    createdAt: moment().day(17).month(9).year(2025),
  },
];

describe.each([
  ['description', 'iptionip', '1990'],
  ['note', 'elaye', '2025'],
])('Filter expenses', (field, text, expectedId) => {
  test(`by ${field}`, () => {
    const filtered = selectExpenses(expenses, { text });
    expect(filtered.length).toEqual(1);
    expect(filtered[0]).toHaveProperty('id', expectedId);
  });
});

describe.each([
  ['date', '2025', '1990'],
])('expenses.sortBy', (date, firstId, secondId) => {
  test(`sort expenses by ${date}`, () => {
    const defaultExpenses = selectExpenses(expenses);
    expect(defaultExpenses.length).toEqual(2);
    expect(defaultExpenses[0].id).toEqual(secondId);

    const sortedExpenses = selectExpenses(expenses, { date });
    expect(sortedExpenses.length).toEqual(2);
    expect(sortedExpenses[0]).toHaveProperty('id', firstId);
  });
});
