import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

const ExpenseList = (props) => {
  const { expenses } = props;
  return (
    <div>
      <h2> Expense List </h2>
      {expenses.map((expense) => {
        const { id, description, amount, createdAt } = expense;

        return (
          <ExpenseListItem
            key={expense.id}
            id={id}
            description={description}
            amount={amount}
            createdAt={createdAt}
          />
        );
      })}
    </div>
  );
};

ExpenseList.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape(ExpenseListItem.propTypes))
    .isRequired,
};

const mapStateToProps = ({ expenses, filters }) => ({
  expenses: selectExpenses(expenses, filters),
});

export default connect(mapStateToProps)(ExpenseList);
