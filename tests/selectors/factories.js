import moment from "moment";

import { makeExpense } from "../_factories/expense-factory";

export function makeExpensesFilterableByDescription() {
  const expectedExpense = makeExpense({
    description: "Pioneer",
    note: "lunar",
  });
  const expenses = [
    expectedExpense,
    makeExpense({ description: "Venus", note: "planet" }),
  ];

  const partialDescriptionFilter = "ionee";
  const partialNoteFilter = "una";

  return {
    expenses,
    partialFilter: partialDescriptionFilter,
    partialNoteFilter,
    expectedExpense,
  };
}

export function makeExpensesFilterableByNote() {
  const expectedExpense = makeExpense({ note: "Lunar" });
  const expenses = [expectedExpense, makeExpense({ note: "planet" })];
  const partialFilter = "una";

  return { expenses, partialFilter, expectedExpense };
}

export function makeExpensesUnfilteredByStartDate() {
  const expectedExpense = makeExpense({ createdAt: moment().year(2077) });
  const unfilteredExpenses = [
    expectedExpense,
    makeExpense({ createdAt: moment().year(2021) }),
  ];
  const startDate = moment().year(2076);

  return { unfilteredExpenses, startDate, expectedExpense };
}

export function makeExpensesUnfilteredByEndDate() {
  const expectedExpense = makeExpense({ createdAt: moment().year(2021) });
  const unfilteredExpenses = [
    expectedExpense,
    makeExpense({ createdAt: moment().year(2077) }),
  ];
  const endDate = moment().year(2076);

  return { unfilteredExpenses, endDate, expectedExpense };
}

export function makeExpensesUnsortableByDate() {
  const latestExpense = makeExpense({ createdAt: moment().year(2077) });
  const unsortedExpenses = [
    makeExpense({ createdAt: moment().year(1990) }),
    latestExpense,
  ];

  return { unsortedExpenses, latestExpense };
}

export function makeExpensesUnsortableByAmount() {
  const latestExpense = makeExpense({ amount: 1000 });
  const unsortedExpenses = [makeExpense({ amount: 1 }), latestExpense];

  return { unsortedExpenses, latestExpense };
}
