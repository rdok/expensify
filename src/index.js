import React from 'react';
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.sass'

import {createStore} from 'redux'
import AppRouter from './routers/AppRouter'

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

const store = createStore((state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {count: state.count + action.incrementBy}
        case 'DECREMENT':
            return {count: state.count - action.decrementBy}
        case 'SET':
            return {count: action.value}
        case 'RESET':
            return {count: 0}
        default:
            return state
    }
})

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
