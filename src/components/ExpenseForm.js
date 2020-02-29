import React from 'react'
import moment from 'moment'

import 'react-dates/initialize'
import 'react-with-styles'
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

    constructor(props) {
        super(props)

        if (props.expense) {
            this.state ={
                ...props.expense,
                amount: (props.expense.amount / 100).toString()
            }
        }
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

        if (!amount || amount.match(/^\d+(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}))
        }
    }

    onCalendarFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}))
    }

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState({createdAt})
        }
    }

    onSubmit = (e) => {
        e.preventDefault()

        const requiredFields = ['description', 'amount']
        const errors = requiredFields.filter((field) => {
            return !this.state[field]
        }).map((field) => {
            let humanField = field.charAt(0).toUpperCase()
            humanField += field.toLowerCase().slice(1)
            return {field: `${humanField} is required.`}
        })

        this.setState({errors})

        errors.length === 0 || console.log(errors)

        errors.length === 0 && this.props.onSubmit({
            id: this.state.id,
            description: this.state.description,
            amount: parseFloat(this.state.amount) * 100,
            createdAt: this.state.createdAt,
            note: this.state.note
        })
    }

    render() {
        return <div>
            <form onSubmit={this.onSubmit}>
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
                    onDateChange={this.onDateChange}
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
                <button>{this.props.submitBtnValue}</button>
            </form>
        </div>
    }
}