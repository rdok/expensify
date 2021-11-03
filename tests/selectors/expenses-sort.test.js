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
