import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";
import { ExpensePropType } from "../types";

function ExpenseList(props) {
  const { expenses } = props;
  return (
    <div>
      <h2> Expense List </h2>
      {expenses.map((expense) => (
        <ExpenseListItem key={expense.id} expense={expense} />
      ))}
    </div>
  );
}

ExpenseList.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.exact(ExpensePropType).isRequired)
    .isRequired,
};

const mapStateToProps = ({ expenses, filters }) => ({
  expenses: selectExpenses(filters, expenses),
});

export default connect(mapStateToProps)(ExpenseList);
