function makeExpense() {
  return {
    description: "You control your fate by the fiction you choose.",
    note: "Maecenas nec erat mauris. ",
    amount: 2059,
  };
}

function makeExpenseWithoutNote() {
  const expense = { ...makeExpense() };
  delete expense.note;
  return expense;
}

module.exports = {
  makeExpense,
  makeExpenseWithoutNote,
};
