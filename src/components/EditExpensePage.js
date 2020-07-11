import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = ({ expense, dispatch, history }) => (
  <div>
    <ExpenseForm
      submitBtnValue="Update"
      expense={expense}
      onSubmit={(expense) => {
        dispatch(editExpense({ id: expense.id }, data));
        history.push('/');
      }}
    />
    <button onClick={() => {
      dispatch(removeExpense({ expense }));
      history.push('/');
    }}
    >
      Remove
    </button>
  </div>
);

const mapStateToProps = ({ expenses }, props) => ({
  expense: expenses.find((expense) => expense.id === props.match.params.id),
});

export default connect(mapStateToProps)(EditExpensePage);
