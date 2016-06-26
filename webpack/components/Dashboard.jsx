import React from 'react';
import DashBudgets from './DashBudgets';
import DashBills from './DashBills';

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { dashboard: [], user: null, budgets: [], expenditures: [] };
		this.displayDashboard = this.displayDashboard.bind(this);
		this.createOptions = this.createOptions.bind(this);
		this.displayExpenditures = this.displayExpenditures.bind(this);
		this.showIncome = this.showIncome.bind(this);
		this.updateIncome = this.updateIncome.bind(this);
	}

	componentWillMount() {
		$.ajax({
			url: `/api/users/${this.props.params.userId}`, 
			type: 'GET', 
			dataType: 'JSON'
		}).done( user => {
			this.setState({ user });
		}).fail( data => {
			alert('Something went wrong'); 
		});
		$.ajax({
			url: `/api/users/${this.props.params.userId}/budgets`,
			type: 'GET',
			dataType: 'JSON'
		}).done( budgets => {
			this.setState({ budgets })
		}).fail( data=> {
			alert('something went wrong with the budgets');
		})
		$.ajax({
			url: `/api/users/${this.props.params.userId}/expenditures`,
			type: 'GET',
			dataType: 'JSON'
		}).done( expenditures => {
			this.setState({ expenditures })
		}).fail( data=> {
			alert('something went wrong with the expenditures');
		})
	}

	showIncome() {
		if(this.state.user.income) {

		} else {
			return(
				<div>
					<h3 className="center">Please update your income</h3>
					<div className="col s6 m4 offset-s3 offset-m4">
						<form ref='incomeForm' onSubmit={this.updateIncome}>
							<input ref='income' type='number' placeholder="Monthly Income" />
						</form>
					</div>
				</div>
			)
		}
	}

	updateIncome(e) {
		e.preventDefault();
		let income = this.refs.income.value
		debugger
		this.refs.incomeForm.reset()
		$.ajax({
			url: `/api/users/${this.state.user.id}`,
			type: 'PUT',
			dataType: 'JSON',
			data: { user: { income } }
		}).done( user => {
			this.setState({ user })
		}).fail( data => {
			alert('Could not update income')
		})
	}

	addExpenditure(e) {
		e.preventDefault();
		let name = this.refs.expenditureName.value
		let amount = this.refs.expenditureAmount.value
		let category = this.refs.expenditureCategory.value
		$.ajax({
			url: `/api/users/${this.props.params.userId}/expenditures`,
			type: 'POST',
			dataType: 'JSON',
			data: { expenditure: { name, amount, category } }
		}).done( expenditure => {
			this.refs.addExpenditure.reset();
			this.setState({
				expenditures: [
					{...expenditure},
					...this.state.expenditures
				]
			})
		}).fail( data => {
			console.log(data)
			alert('failed to create expenditure')
		})
	}

	displayExpenditures() {
		return(
			this.state.expenditures.map( expenditure => {
				return(
					<div key={`expenditure-${expenditure.id}`}>
						<p>{expenditure.name}: ${expenditure.amount}</p>
					</div>
				)
			})
		)
	}

	createOptions() {
		console.log(this.state.budgets.length)
		return (
			this.state.budgets.map( budget => {
				return(<option key={`option-${budget.id}`} value={budget.name}>{budget.name}</option>)
			})
		)
	}

	displayDashboard() {
		return(
			<div>
				<div className="row">
					{this.showIncome()}
				</div>
				<div className="col s6 m9">
					<h2 className="center" style={{marginTop: '0'}}>Your Dashboard</h2>
					<div className="container" style={{ border: 'solid 1px grey', borderRadius: '10px', padding: "5px"}}>
						<DashBudgets budgets={this.state.budgets} expenditures={this.state.expenditures} userId={this.state.user.id}/>
						<hr />
						<DashBills userId={this.state.user.id}/>
					</div>
				</div>
				<div className="col s6 m3" style={{borderLeft: 'solid 1px grey'}}>
					<h6>Add New Expenditure</h6>
					<form ref='addExpenditure' onSubmit={this.addExpenditure.bind(this)} >
						<input ref='expenditureName' placeholder='Name' />
						<input ref='expenditureAmount' placeholder='Amount' />
						<label>Category</label>
						<select ref='expenditureCategory' className="browser-default">
							{this.createOptions()}
							<option value="Other">Other</option>
						</select>
						<button className="btn">Add</button>
					</form>
					<h4>Expenditures</h4>
					<hr />
					{this.displayExpenditures()}
				</div>
			</div>
		)
	}


	render() {
		if(this.state.budgets.length > 0) {
			return(
				<div className='row'>
					{this.displayDashboard()}
				</div>
			)
		} else {
			return(<h2>Loading...</h2>)
		}
	}
}

export default Dashboard