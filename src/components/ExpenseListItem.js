import React from 'react'
import {connect} from 'react-redux'
import {removeExpense} from '../actions/expenses'
import {NavLink} from "react-router-dom"

const ExpenseListItem = ({id, description, amount, createdAt, dispatch}) => {
    return <div>
        <h3>
            <NavLink to={`/edit/${id}`}>{description}</NavLink>
        </h3>
        <p>Amount: {amount}</p>
        <p>Created At: {createdAt.fromNow()}</p>
        <button onClick={() => {
            const expense = {id: id}
            dispatch(removeExpense({expense}))
        }}>Remove
        </button>
        <hr/>
    </div>
}


export default connect()(ExpenseListItem)