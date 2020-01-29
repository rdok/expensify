import React from 'react';
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.sass'

import {createStore} from 'redux'
import AppRouter from './routers/AppRouter'

const store = createStore((state = {count: 0}) => {
    return state
})

ReactDOM.render(<AppRouter/>, document.getElementById('root'))
