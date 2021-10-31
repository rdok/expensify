function filter(expenses, { text, startDate, endDate }) {
  return expenses.filter((expense) => {
    const search = text ? text.toLowerCase() : undefined;
    const textMatch = search
      ? ["description", "note"].find((field) =>
          expense[field].toLowerCase().includes(search)
        ) !== undefined
      : true;

    const startDateMatch = startDate
      ? startDate.isSameOrBefore(expense.createdAt)
      : true;
    const endDateMatch = endDate
      ? endDate.isSameOrAfter(expense.createdAt)
      : true;

    return textMatch && startDateMatch && endDateMatch;
  });
}

function sortByCreatedAt(expenses) {
  return expenses.sort((expense, nextExpense) => {
    const isCreatedBefore = expense.createdAt.isBefore(nextExpense.createdAt);

    return isCreatedBefore ? 1 : -1;
  });
}

function sortByAmount(expenses) {
  return expenses.sort((expense, nextExpense) => {
    const expensive = expense.amount < nextExpense.amount;

    return expensive ? 1 : -1;
  });
}

export default (expenses, filters) => {
  let response = expenses;

  if (!filters) return response;

  response = filter(expenses, filters);

  if (filters.sortBy && filters.sortBy === "date") {
    response = sortByCreatedAt(expenses);
  }

  if (filters.sortBy && filters.sortBy === "amount") {
    response = sortByAmount(expenses);
  }

  return response;
};
