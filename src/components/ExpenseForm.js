import React from 'react';
import moment from 'moment'

import 'react-dates/initialize';
import 'react-with-styles';
import 'react-dates/lib/css/_datepicker.css'

import {SingleDatePicker} from 'react-dates'

export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        calendarFocused: false
    }

    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({description}))
    }

    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({note}))
    }

    onAmountChange = (e) => {
        const amount = e.target.value

        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}))
        }
    }

    onCalendarFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}))
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        onChange={this.onAmountChange}
                        value={this.state.amount}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={createdAt => this.setState({createdAt})}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onCalendarFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={(date) => false}
                    />
                    <textarea
                        placeholder="Note"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}