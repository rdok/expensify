import moment from "moment";
import { v4 as uuid } from "uuid";
import {
  makeExpense,
  makeExpenseWithFillable,
} from "../_factories/expense-factory";

jest.mock("uuid");
jest.mock("moment");

const {
  addExpense,
  editExpense,
  removeExpense,
} = require("../../src/actions/expenses");

export function makeAddExpense() {
  const fillable = makeExpenseWithFillable();
  const mockedId = "mockedId";
  const mockedCreatedAt = "mockedMoment";
  uuid.mockImplementationOnce(() => mockedId);
  moment.mockImplementationOnce(() => mockedCreatedAt);

  return { fillable, addExpense, mockedId, mockedCreatedAt };
}

export function makeEditExpense() {
  const expense = makeExpense();
  return { expense, editExpense };
}

export function makeRemoveExpense() {
  const expense = makeExpense();
  return { expense, removeExpense };
}

export function makeAddExpenseWithoutANote() {
  const addExpenseFactory = makeAddExpense();
  delete addExpenseFactory.fillable.note;
  return addExpenseFactory;
}
