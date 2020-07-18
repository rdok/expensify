import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DateRangePicker } from 'react-dates';
import {
  setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate,
} from '../actions/filters';

class ExpensesListFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { calendarFocused: null };
  }

  onDatesChange = ({ startDate, endDate }) => {
    const { dispatch } = this.props;
    dispatch(setStartDate(startDate));
    dispatch(setEndDate(endDate));
  }

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }

  render() {
    const { filters, dispatch, onDatesChange } = this.props;
    const { calendarFocused } = this.state;
    return (
      <div>
        <input
          type="text"
          value={filters.text}
          onChange={(e) => { dispatch(setTextFilter(e.target.value)); }}
        />

        <select
          value={filters.sortBy}
          onChange={(e) => {
            switch (e.target.value) {
              case 'date':
                return dispatch(sortByDate());
              case 'amount':
                return dispatch(sortByAmount());
              default:
                throw Error;
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={filters.startDate}
          endDate={filters.endDate}
          startDateId="start-date"
          endDateId="end-date"
          onDatesChange={onDatesChange}
          focusedInput={calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates
        />
      </div>
    );
  }
}

ExpensesListFilter.propTypes = {
  dispatch: PropTypes.func.isRequired,
  filters: PropTypes.func.isRequired,
  onDatesChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filters: state.filters,
});

export default connect(mapStateToProps)(ExpensesListFilter);
