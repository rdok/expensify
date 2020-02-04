import React from 'react';
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.sass'

import {createStore, combineReducers} from 'redux'
import AppRouter from './routers/AppRouter'

const demoteState = {
   expenses: [{
      id: 'unique-id',
      description: 'Loreum Ipsum - Description',
      notes: 'Lorem Ipsum - Notes',
      amount: 54500,
      createdAt: 0
   }],
   filters: {
      text: 'rent',
      sortBy: 'amount',  // data|amount
      startDate: undefined,
      endDate: undefined,
   }
}

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
})

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
})

const setCount = (value) => ({
    type: 'SET', value
})

const resetCount = () => ({ type: 'RESET' })

const countReducer = (state = {count: 0}, {type, incrementBy, decrementBy, value}) => {
    switch (type) {
        case 'INCREMENT':
            return {count: state.count + incrementBy}
        case 'DECREMENT':
            return {count: state.count - decrementBy}
        case 'SET':
            return {count: value}
        case 'RESET':
            return {count: 0}
        default:
            return state
    }
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
    console.log('subscribe', store.getState())
})

// store.dispatch(incrementCount({incrementBy: 5}))
// store.dispatch(incrementCount())

// store.dispatch(decrementCount({decrementBy: 3}))

// store.dispatch({type: 'SET', value: 2077})
// store.dispatch(setCount(2077))

store.dispatch(resetCount())

// unsubscribe()


ReactDOM.render(<AppRouter/>, document.getElementById('root'))
