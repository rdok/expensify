import uuid from 'uuid'

export const addExpense = (
    {description = '', note = '', amount = 0, createdAt = 0}
) => ({
    type: 'ADD_EXPENSE',
    expense: {id: uuid(), description, note, amount, createdAt}
})

export const editExpense = ({id}, data) => ({
    type: 'EDIT_EXPENSE',
    expense: {id, ...data}
})

export const removeExpense = ({expense}) => ({type: 'REMOVE_EXPENSE', expense})
