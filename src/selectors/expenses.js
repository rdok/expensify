export default (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number'
            || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number'
            || expense.createdAt <= endDate;

        const textMatch = expense.description.toLocaleLowerCase()
            .includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
    }).sort((firstExpense, secondExpense) => {
        switch (sortBy) {
            case 'date':
                return firstExpense.createdAt < secondExpense.createdAt
            case 'amount':
                return firstExpense.amount < secondExpense.amount
        }
    })
}
