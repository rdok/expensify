import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const ExpenseList = (props) => (
    <div>
        <h1> Expense List </h1>
        {props.filters.text}
        {/*{props.filters.length}*/}
        <ul>
            <li><Link to="/edit/cyberpunk-2077">Cyberpunk 2077</Link></li>
            <li><Link to="/edit/witcher-3">The Witcher 3</Link></li>
        </ul>
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseList)

