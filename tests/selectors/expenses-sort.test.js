import selectExpenses from "../../src/selectors/expenses";
import {
  makeExpensesUnsortableByAmount,
  makeExpensesUnsortableByDate,
} from "./factories";

test("Sort expenses by date", () => {
  const { unsortedExpenses, latestExpense } = makeExpensesUnsortableByDate();
  const sortedExpenses = selectExpenses(unsortedExpenses, { sortBy: "date" });
  expect(sortedExpenses[0].id).toEqual(latestExpense.id);
});

test("Sort expenses by amount", () => {
  const { unsortedExpenses, latestExpense } = makeExpensesUnsortableByAmount();
  const sortedExpenses = selectExpenses(unsortedExpenses, { sortBy: "amount" });
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
