export default (expenses, filters) => {
    if (!filters) return expenses
    if (filters.text) expenses = filter(expenses, filters)
    if (filters.date) expenses = sort(expenses)

    return expenses
}

function filter(expenses, filters) {
    return expenses.filter((expense) => {
        const text = filters.text.toLowerCase()

        return ['description', 'note'].find(field => {
            return expense[field].toLowerCase().includes(text)
        }) !== undefined
    })
}


function sort(expenses) {
    return expenses.sort((expense, nextExpense) => {
        return expense.createdAt.isBefore(nextExpense.createdAt) ? 1 : -1
    })
}

