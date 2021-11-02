import selectExpenses from "../../src/selectors/expenses";
import {
  makeExpensesFilterableByDescription,
  makeExpensesFilterableByNote,
} from "./factories";

describe("When filtering expenses using partial description", () => {
  it("filters out non matching expenses", () => {
    const { expenses, partialFilter } = makeExpensesFilterableByDescription();
    const filteredExpenses = selectExpenses(expenses, { text: partialFilter });
    expect(filteredExpenses.length).toEqual(1);
  });

  it("returns the correct expense", () => {
    const { expenses, partialFilter, expectedExpense } =
      makeExpensesFilterableByDescription();
    const filteredExpenses = selectExpenses(expenses, { text: partialFilter });
    expect(filteredExpenses[0]).toHaveProperty("id", expectedExpense.id);
  });
});

describe("When filtering expenses using partial note", () => {
  it("filters out non matching expenses", () => {
    const { expenses, partialFilter } = makeExpensesFilterableByNote();
    const filteredExpenses = selectExpenses(expenses, { text: partialFilter });
    expect(filteredExpenses.length).toEqual(1);
  });

  it("returns the correct expense", () => {
    const { expenses, partialFilter, expectedExpense } =
      makeExpensesFilterableByNote();
    const filteredExpenses = selectExpenses(expenses, { text: partialFilter });
    expect(filteredExpenses[0]).toHaveProperty("id", expectedExpense.id);
  });
});
