import moment from "moment"
import selectExpenses from '../../src/selectors/expenses'

const expenses = [
    {
        id: '2077',
        description: 'Cyberpunk2077',
        note: 'Delayed',
        amount: 5000,
        createdAt: moment().day(17).month(9).year(2020)
    },
    {
        id: '1969',
        description: 'First man to the moon',
        note: 'Neil Armstrong',
        amount: 25400000000,
        createdAt: moment().day(20).month(7).year(1969)
    }
]

describe.each([
    ['description', 'moon', '1969'],
    ['note', 'elaye', '2077'],
])('expenses.filter', (field, text, expected) => {
    test(`filters expenses by ${field}`, () => {
        const response = selectExpenses(expenses, {text})
        expect(response.length).toEqual(1)
        expect(response[0]).toHaveProperty('id', expected)
    })
})