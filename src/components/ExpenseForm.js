import React from 'react';

export default class ExpenseForm extends React.Component {
    state = {description: ''}

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
                    <textarea placeholder="Note" onChange={this.onNoteChange}/>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}