import selectExpenses from "../../src/selectors/expenses";
import {
  makeExpensesFilterableByDescription,
  makeExpensesFilterableByNote,
  makeExpensesUnfilteredByEndDate,
  makeExpensesUnfilteredByStartDate,
} from "./factories";

describe("When filtering expenses", () => {
  describe("With partial description", () => {
    test("remove all but a single expense", () => {
      const { expenses, partialFilter } = makeExpensesFilterableByDescription();
      const text = { text: partialFilter };
      const filteredExpenses = selectExpenses(expenses, text);
      expect(filteredExpenses.length).toEqual(1);
    });

    test("leave the correct expense", () => {
      const { expenses, partialFilter, expectedExpense } =
        makeExpensesFilterableByDescription();
      const text = { text: partialFilter };
      const filteredExpenses = selectExpenses(expenses, text);
      expect(filteredExpenses[0]).toHaveProperty("id", expectedExpense.id);
    });
  });

  describe("With partial note", () => {
    test("remove all but a single expense", () => {
      const { expenses, partialFilter } = makeExpensesFilterableByNote();
      const text = { text: partialFilter };
      const filteredExpenses = selectExpenses(expenses, text);
      expect(filteredExpenses.length).toEqual(1);
    });

    test("returns the correct expense", () => {
      const { expenses, partialFilter, expectedExpense } =
        makeExpensesFilterableByNote();
      const text = { text: partialFilter };
      const filteredExpenses = selectExpenses(expenses, text);
      expect(filteredExpenses[0]).toHaveProperty("id", expectedExpense.id);
    });
  });

  describe("With startDate", () => {
    test("remove all but a single expense", () => {
      const { unfilteredExpenses, startDate } =
        makeExpensesUnfilteredByStartDate();
      const filters = { startDate };
      const filteredExpenses = selectExpenses(unfilteredExpenses, filters);
      expect(filteredExpenses.length).toEqual(1);
    });

    test("returns the correct expense", () => {
      const { unfilteredExpenses, startDate, expectedExpense } =
        makeExpensesUnfilteredByStartDate();
      const filters = { startDate };
      const filteredExpenses = selectExpenses(unfilteredExpenses, filters);
      expect(filteredExpenses[0]).toHaveProperty("id", expectedExpense.id);
    });
  });

  describe("With endDate", () => {
    test("remove all but a single expense", () => {
      const { unfilteredExpenses, endDate } = makeExpensesUnfilteredByEndDate();
      const filters = { endDate };
      const filteredExpenses = selectExpenses(unfilteredExpenses, filters);
      expect(filteredExpenses.length).toEqual(1);
    });

    test("returns the correct expense", () => {
      const { unfilteredExpenses, endDate, expectedExpense } =
        makeExpensesUnfilteredByEndDate();
      const filters = { endDate };
      const filteredExpenses = selectExpenses(unfilteredExpenses, filters);
      expect(filteredExpenses[0]).toHaveProperty("id", expectedExpense.id);
    });
  });
});
