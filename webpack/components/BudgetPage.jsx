import React from 'react';
import Budget from './Budget';

class BudgetPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = { budgets: [] }
		this.displayBudgets = this.displayBudgets.bind(this)
	}

	componentWillMount() {
		$.ajax({
			url:`/api/users/${this.props.params.userId}/budgets`,
			type: 'GET',
			dataType: 'JSON'
		}).done( budgets => {
			this.setState({ budgets })
		}).fail( data => {
			alert('Something went wrong')
		})
	}

	addBudget(e) {
		e.preventDefault();
		let name = this.refs.name.value
		let amount = this.refs.amount.value
		$.ajax({
			url: `/api/users/${this.props.params.userId}/budgets`,
			type: 'POST',
			dataType: 'JSON',
			data: { budget: { name, amount } }
		}).done( budget => {
			this.setState({ budgets: [
					{...budget},
					...this.state.budgets
				]
			})
		})
		this.refs.addBudgetForm.reset()
	}

	displayBudgets() {
		return this.state.budgets.map( budget => {
			return (
				<Budget key={budget.id} budget={budget} />
			)
		})
	}

	render() {
		if(this.state.budgets){
			return(
				<div className='row'>
					<h1 className="center">Budgets</h1>
					<div className="container">
						<h4>Add new Budget</h4>
						<form ref='addBudgetForm' onSubmit={this.addBudget.bind(this)}>
							<input ref='name' placeholder='name' />
							<input ref='amount' type='number' step='any' placeholder='Alloted Amount per Month' />
							<button type='submit' className='btn'>Create Budget</button>
						</form>
					</div>
					{this.displayBudgets()}
				</div>
			)
		} else {
			return(<h1 className="center">Loading Budgets...</h1>)
		}
	}
}

export default BudgetPage