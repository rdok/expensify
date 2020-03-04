import moment from "moment"

export default (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatches = ! moment.isMoment(startDate)
            || startDate.isSameOrBefore(expense.createdAt)

        const endDateMatches = ! moment.isMoment(endDate)
            || endDate.isSameOrAfter(expense.createdAt)

        const textMatches = expense.description.toLocaleLowerCase()
            .includes(text.toLowerCase())

        return startDateMatches && endDateMatches && textMatches
    }).sort((firstExpense, secondExpense) => {
        switch (sortBy) {
            case 'date':
                return firstExpense.createdAt.isBefore(secondExpense.createdAt)
            case 'amount':
                return firstExpense.amount < secondExpense.amount
        }
    })
}
