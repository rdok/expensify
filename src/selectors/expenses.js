function filter(expenses, filters) {
  return expenses.filter((expense) => {
    const text = filters.text.toLowerCase();

    return ['description', 'note']
      .find((field) => expense[field].toLowerCase().includes(text)) !== undefined;
  });
}

function sort(expenses) {
  return expenses
    .sort((expense, nextExpense) => (expense.createdAt.isBefore(nextExpense.createdAt) ? 1 : -1));
}

export default (expenses, filters) => {
  let response = expenses;
  if (!filters) return response;
  if (filters.text) response = filter(expenses, filters);
  if (filters.date) response = sort(expenses);

  return response;
};
