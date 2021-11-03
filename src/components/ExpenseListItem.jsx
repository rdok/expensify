import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { ExpensePropType } from "../types";

const ExpenseListItem = ({
  expense: { description, id, createdAt, amount },
}) => (
  <div>
    <h3>
      <NavLink to={`/edit/${id}`}>{description}</NavLink>
    </h3>
    <p>Amount: {amount}</p>
    <p>Created {createdAt.fromNow()}</p>
    <hr />
  </div>
);

ExpenseListItem.propTypes = {
  expense: PropTypes.exact(ExpensePropType).isRequired,
};

export default connect()(ExpenseListItem);
