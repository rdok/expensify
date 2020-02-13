import uuid from 'uuid'

const ADD_EXPENSE = 'ADD_EXPENSE'
const REMOVE_EXPENSE = 'REMOVE_EXPENSE'
const EDIT_EXPENSE = 'EDIT_EXPENSE'

const defaultState = []

export const addExpense = (
    {description = '', note = '', amount = 0, createdAt = 0}
) => ({
    type: ADD_EXPENSE,
    expense: {id: uuid(), description, note, amount, createdAt}
})

export const editExpense = ({id}, data) => ({
    type: EDIT_EXPENSE,
    expense: {id, ...data}
})

export const removeExpense = ({expense}) => ({type: REMOVE_EXPENSE, expense})

export const expensesReducer = (state = defaultState, {type, expense}) => {
    switch (type) {
        case ADD_EXPENSE:
            return [...state, expense]
        case REMOVE_EXPENSE:
            return state.filter(({id}) => id !== expense.id)
        case EDIT_EXPENSE:
            return state.map((item) => {
                return item.id === expense.id ? {...item, ...expense} : expense;
            })
        default:
            return state;
    }
}

