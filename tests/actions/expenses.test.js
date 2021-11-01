import moment from "moment";
import {
  addExpense,
  editExpense,
  removeExpense,
} from "../../src/actions/expenses";
import { makeExpense, makeExpenseWithoutNote } from "../factories";

jest.mock("uuid", () => ({ v4: () => "2077" }));
jest.mock("moment", () => () => "mockedMoment");

test("adds expense action", () => {
  const expense = makeExpense();
  const action = addExpense(expense);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: "2077",
      createdAt: "mockedMoment",
      ...expense,
    },
  });
});

test("adds expense without a note", () => {
  const expense = makeExpenseWithoutNote();
  const action = addExpense(expense);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: "2077",
      createdAt: "mockedMoment",
      ...expense,
      note: "",
    },
  });
});

test("edits expense action", () => {
  const data = {
    description: "Reality",
    note: "Maecenas",
    amount: 2059,
  };

  const expense = {
    id: "2077",
    createdAt: moment(),
  };

  const action = editExpense(expense, data);

  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    expense: { ...expense, ...data },
  });
});

test("removes expense action", () => {
  const action = removeExpense({ id: "2077" });

  expect(action).toEqual({
    id: "2077",
    type: "REMOVE_EXPENSE",
  });
});
