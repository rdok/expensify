const defaultState = {
    text: '', sortBy: 'date', startDate: undefined, endDate: undefined
}

export const setTextFilter = (text) => ({type: 'SET_TEXT_FILTER', text})
export const sortByDate = (text) => ({type: 'SORT_BY_DATE'})
export const sortByAmount = (text) => ({type: 'SORT_BY_AMOUNT'})

export const setStartDate = (startDate) => ({type: 'SET_START_DATE', startDate})
export const setEndDate = (endDate) => ({type: 'SET_END_DATE', endDate})

export const filtersReducer = (state = defaultState, {
    type, text = '', startDate = undefined, endDate = undefined
}) => {
    switch (type) {
        case 'SET_TEXT_FILTER':
            return {...state, text}
        case 'SORT_BY_AMOUNT':
            return {...state, sortBy: 'amount'}
        case 'SORT_BY_DATE':
            return {...state, sortBy: 'date'}
        case 'SET_START_DATE':
            return {...state, startDate}
        case 'SET_END_DATE':
            return {...state, endDate}
        default:
            return state;
    }
}
