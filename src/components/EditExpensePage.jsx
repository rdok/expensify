import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';
import ExpenseListItem from './ExpenseListItem';

const EditExpensePage = ({ expense, dispatch, history }) => (
  <div>
    <ExpenseForm
      submitBtnValue="Update"
      expense={expense}
      onSubmit={({ id }) => {
        dispatch(editExpense({ id }));
        history.push('/');
      }}
    />
    <button
      type="button"
      onClick={() => {
        dispatch(removeExpense({ expense }));
        history.push('/');
      }}
    >
      Remove
    </button>
  </div>
);

EditExpensePage.propTypes = {
  expense: PropTypes.instanceOf(ExpenseListItem).isRequired,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.string.isRequired,
};

const mapStateToProps = ({ expenses }, props) => ({
  expense: expenses.find((expense) => expense.id === props.match.params.id),
});

export default connect(mapStateToProps)(EditExpensePage);
