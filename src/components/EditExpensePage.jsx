import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";
import { ExpensePropType } from "../types";

const EditExpensePage = ({ expense, dispatch, history }) => (
  <div>
    <ExpenseForm
      submitBtnValue="Update"
      expense={expense}
      onSubmit={({ id }) => {
        dispatch(editExpense({ id }));
        history.push("/");
      }}
    />
    <button
      type="button"
      onClick={() => {
        dispatch(removeExpense({ expense }));
        history.push("/");
      }}
    >
      Remove
    </button>
  </div>
);

EditExpensePage.propTypes = {
  expense: PropTypes.exact({ ...ExpensePropType }).isRequired,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

const mapStateToProps = ({ expenses }, props) => ({
  expense: expenses.find((expense) => expense.id === props.match.params.id),
});

export default connect(mapStateToProps)(EditExpensePage);
