import moment from "moment";
import selectExpenses from "../../src/selectors/expenses";
import { makeExpense } from "../_factories/expense-factory";

const expenseAlpha = {
  id: "1990",
  description: "DescriptionIpsum",
  note: "NoteIpsum",
  amount: 5000,
  createdAt: moment().day(20).month(7).year(1990),
};
const expenseBeta = {
  id: "2025",
  description: "Cyberpunk2077",
  note: "Delayed",
  amount: 254,
  createdAt: moment().day(17).month(9).year(2025),
};

const expenses = [expenseAlpha, expenseBeta];

describe.each([
  ["description", "iptionip", "1990"],
  ["note", "elaye", "2025"],
])("Filter expenses by text", (field, searchInput, expectedId) => {
  test(`by ${field}`, () => {
    const filters = { text: searchInput };
    const filtered = selectExpenses(expenses, filters);
    expect(filtered.length).toEqual(1);
    expect(filtered[0]).toHaveProperty("id", expectedId);
  });
});

describe("Filter expenses by partial text", () => {
  test("using description", () => {
    const fillable = { description: "Pioneer", note: "lunar" };
    const expectedExpense = makeExpense(fillable);

    const filtered = selectExpenses(
      [expectedExpense, makeExpense({ description: "Venus", note: "planet" })],
      { text: "ionee" }
    );

    expect(filtered.length).toEqual(1);
    expect(filtered[0]).toHaveProperty("id", expectedExpense.id);
  });
});

test(`Sort expenses by date`, () => {
  const defaultExpenses = selectExpenses(expenses);
  expect(defaultExpenses.length).toEqual(2);
  expect(defaultExpenses[0].id).toEqual("1990");

  const filters = { sortBy: "date" };
  const sortedExpenses = selectExpenses(expenses, filters);
  expect(sortedExpenses.length).toEqual(2);
  expect(sortedExpenses[0].id).toEqual("2025");
});

test(`Sort expenses by amount`, () => {
  const defaultExpenses = selectExpenses(expenses);
  expect(defaultExpenses.length).toEqual(2);
  expect(defaultExpenses[0].id).toEqual(expenseBeta.id);

  const filters = { sortBy: "amount" };
  const sortedExpenses = selectExpenses(expenses, filters);
  expect(sortedExpenses.length).toEqual(2);
  expect(sortedExpenses[0].id).toEqual(expenseAlpha.id);
});

test(`Filter expenses by startDate`, () => {
  let filters = { startDate: expenseBeta.createdAt };
  let filtered = selectExpenses(expenses, filters);
  expect(filtered.length).toEqual(1);
  expect(filtered[0].id).toEqual(expenseBeta.id);

  filters = { startDate: expenseAlpha.createdAt };
  filtered = selectExpenses(expenses, filters);
  expect(filtered.length).toEqual(2);
});

test(`Filter expenses by endDate`, () => {
  let filters = { endDate: expenseAlpha.createdAt };
  let filtered = selectExpenses(expenses, filters);
  expect(filtered.length).toEqual(1);
  expect(filtered[0].id).toEqual(expenseAlpha.id);

  filters = { endDate: expenseBeta.createdAt };
  filtered = selectExpenses(expenses, filters);
  expect(filtered.length).toEqual(2);
});
