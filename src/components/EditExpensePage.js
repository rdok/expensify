import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from "./ExpenseForm"
import {editExpense} from "../actions/expenses"

const EditExpensePage = ({expense, dispatch, history}) => <div>
    <ExpenseForm
        submitBtnValue='Update'
        expense={expense}
        onSubmit={(expense) => {
            dispatch(editExpense({id: expense.id}, expense))
            history.push('/')
        }}
    />
</div>


const mapStateToProps = ({expenses}, props) => {
    return {
        expense: expenses.find((expense) => {
            return expense.id === props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(EditExpensePage)
