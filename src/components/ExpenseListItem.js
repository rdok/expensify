import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from "react-router-dom"

const ExpenseListItem = ({id, description, amount, createdAt}) => {
    return <div>
        <h3>
            <NavLink to={`/edit/${id}`}>{description}</NavLink>
        </h3>
        <p>Amount: {amount}</p>
        <p>Created At: {createdAt.fromNow()}</p>
        <hr/>
    </div>
}


export default connect()(ExpenseListItem)