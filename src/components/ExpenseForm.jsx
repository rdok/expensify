import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import 'react-dates/initialize';
import 'react-with-styles';
import 'react-dates/lib/css/_datepicker.css';

import { SingleDatePicker } from 'react-dates';
import ExpenseListItem from './ExpenseListItem';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      note: '',
      amount: '',
      createdAt: moment(),
      calendarFocused: false,
    };

    if (props.expense) {
      this.state = {
        ...props.expense,
        amount: (props.expense.amount / 100).toString(),
      };
    }
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  }

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  }

  onAmountChange = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d+(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  }

  onCalendarFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  }

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState({ createdAt });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { state } = this;

    const requiredFields = ['description', 'amount'];
    const errors = requiredFields.filter((field) => !state[field]).map((field) => {
      let humanField = field.charAt(0).toUpperCase();
      humanField += field.toLowerCase().slice(1);
      return { field: `${humanField} is required.` };
    });

    this.setState({ errors });

    if (errors.length !== 0) throw new Error(errors);

    const { props } = this;
    const { expense } = props;
    const {
      id, description, amount, createdAt, note,
    } = expense;

    props.onSubmit({
      id,
      description,
      amount: parseFloat(amount) * 100,
      createdAt,
      note,
    });
  }

  render() {
    const { state, props } = this;

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            value={state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            onChange={this.onAmountChange}
            value={state.amount}
          />
          <SingleDatePicker
            date={state.createdAt}
            onDateChange={this.onDateChange}
            focused={state.calendarFocused}
            onFocusChange={this.onCalendarFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Note"
            value={state.note}
            onChange={this.onNoteChange}
          />
          <button type="submit">{props.submitBtnValue}</button>
        </form>
      </div>
    );
  }
}

ExpenseForm.propTypes = {
  expense: PropTypes.instanceOf(ExpenseListItem).isRequired,
  onSubmit: PropTypes.instanceOf(ExpenseListItem).isRequired,
  submitBtnValue: PropTypes.string.isRequired,
};
