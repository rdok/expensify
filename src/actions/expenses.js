import { v4 as uuid } from "uuid";
import moment from "moment";

export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    createdAt: moment(),
    ...expense,
    note: expense.note ?? "",
  },
});

export const editExpense = (expense, data) => ({
  type: "EDIT_EXPENSE",
  expense: { id: expense.id, createdAt: expense.createdAt, ...data },
});

export const removeExpense = ({ id }) => ({ type: "REMOVE_EXPENSE", id });
