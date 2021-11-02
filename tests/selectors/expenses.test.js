import selectExpenses from "../../src/selectors/expenses";
import { makeExpensesUnsortableByDate } from "./factories";
//
// const expenseAlpha = {
//   id: "1990",
//   description: "DescriptionIpsum",
//   note: "NoteIpsum",
//   amount: 5000,
//   createdAt: moment().day(20).month(7).year(1990),
// };
// const expenseBeta = {
//   id: "2025",
//   description: "Cyberpunk2077",
//   note: "Delayed",
//   amount: 254,
//   createdAt: moment().day(17).month(9).year(2025),
// };
//
// const expenses = [expenseAlpha, expenseBeta];

test(`Sort expenses by date`, () => {
  const { unsortedExpenses, latestExpense } = makeExpensesUnsortableByDate();
  const sortedExpenses = selectExpenses(unsortedExpenses, { sortBy: "date" });
  expect(sortedExpenses[0].id).toEqual(latestExpense.id);
});

// test(`Filter expenses by startDate`, () => {
//   let filters = { startDate: expenseBeta.createdAt };
//   let filtered = selectExpenses(expenses, filters);
//   expect(filtered.length).toEqual(1);
//   expect(filtered[0].id).toEqual(expenseBeta.id);
//
//   filters = { startDate: expenseAlpha.createdAt };
//   filtered = selectExpenses(expenses, filters);
//   expect(filtered.length).toEqual(2);
// });
//
// test(`Filter expenses by endDate`, () => {
//   let filters = { endDate: expenseAlpha.createdAt };
//   let filtered = selectExpenses(expenses, filters);
//   expect(filtered.length).toEqual(1);
//   expect(filtered[0].id).toEqual(expenseAlpha.id);
//
//   filters = { endDate: expenseBeta.createdAt };
//   filtered = selectExpenses(expenses, filters);
//   expect(filtered.length).toEqual(2);
// });
