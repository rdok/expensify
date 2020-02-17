const defaultState = []

export default (state = defaultState, {type, expense}) => {
    switch (type) {
        case 'ADD_EXPENSE':
            return [...state, expense]
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== expense.id)
        case 'EDIT_EXPENSE':
            return state.map((item) => {
                return item.id === expense.id ? {...item, ...expense} : expense;
            })
        default:
            return state;
    }
}

