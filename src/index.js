import React from 'react';
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.sass'

import {createStore} from 'redux'
import AppRouter from './routers/AppRouter'

const store = createStore((state = {count: 1}) => {
    return state
})

console.log((store.getState()))


ReactDOM.render(<AppRouter/>, document.getElementById('root'))
