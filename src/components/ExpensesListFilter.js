import React from 'react'
import {connect} from 'react-redux'
import {setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate} from '../actions/filters'
import {DateRangePicker} from 'react-dates'

class ExpensesListFilter extends React.Component {
    state = {calendarFocused: null}

    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}))
    }

    render() {
        return <div>
            <input type="text" value={this.props.filters.text} onChange={(e) => {
                this.props.dispatch(setTextFilter(e.target.value))
            }}/>

            <select value={this.props.filters.sortBy} onChange={(e) => {
                switch (e.target.value) {
                    case "date":
                        return this.props.dispatch(sortByDate())
                    case "amount":
                        return this.props.dispatch(sortByAmount())
                }
            }}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
            <DateRangePicker
                startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                startDateId='start-date'
                endDateId='end-date'
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={() => false}
                showClearDates={true}
            />
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}
export default connect(mapStateToProps)(ExpensesListFilter)