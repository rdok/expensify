import {
  makeAddExpense,
  makeAddExpenseWithoutANote,
  makeEditExpense,
  makeRemoveExpense,
} from "../factories/expense-action-factory";

test("adds expense action", () => {
  const { fillable, addExpense, mockedId, mockedCreatedAt } = makeAddExpense();
  const action = addExpense(fillable);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: mockedId,
      createdAt: mockedCreatedAt,
      ...fillable,
    },
  });
});

test("adds empty note when adding expense action without a note", () => {
  const { fillable, addExpense } = makeAddExpenseWithoutANote();
  const action = addExpense(fillable);
  expect(action).toMatchObject({ expense: { note: "" } });
});

test("edits expense action", () => {
  const { fillable, expense, editExpense } = makeEditExpense();
  const action = editExpense(expense, fillable);

  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    expense: {
      id: expense.id,
      createdAt: expense.createdAt,
      ...fillable,
    },
  });
});

test("removes expense action", () => {
  const { expense, removeExpense } = makeRemoveExpense();
  const action = removeExpense(expense);

  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: expense.id,
  });
});
