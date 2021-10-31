import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <h3>
      <NavLink to={`/edit/${id}`}>{description}</NavLink>
    </h3>
    <p>
      Amount:
      {amount}
    </p>
    <p>
      Created At:
      {createdAt.fromNow()}
    </p>
    <hr />
  </div>
);

ExpenseListItem.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  createdAt: PropTypes.shape({ fromNow: PropTypes.func }).isRequired,
};

export default connect()(ExpenseListItem);
