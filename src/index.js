import React from 'react';
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.sass'

import {createStore} from 'redux'
import AppRouter from './routers/AppRouter'

const store = createStore((state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = action.incrementBy || 1
            return {count: state.count + incrementBy}
        case 'DECREMENT':
            const decrementBy = action.decrementBy || 1
            return {count: state.count - decrementBy}
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

// store.dispatch({type: 'INCREMENT', incrementBy: 5})
// store.dispatch({type: 'INCREMENT'})
// store.dispatch({type: 'INCREMENT'})

// store.dispatch({type: 'DECREMENT'})
// store.dispatch({type: 'DECREMENT', decrementBy: 3})

store.dispatch({type: 'SET', value: 2077})

unsubscribe()

store.dispatch({type: 'RESET'})

ReactDOM.render(<AppRouter/>, document.getElementById('root'))
