import React from 'react';
import { Link } from 'react-router';

class DashBills extends React.Component {
	constructor(props) {
		super(props);
		this.state = { bills: [] }
		this.displayBills = this.displayBills.bind(this)
	}

	componentWillMount() {
		$.ajax({
			url: `/api/users/${this.props.userId}/bills`,
			type: 'GET',
			dataType: 'JSON'
		}).done( bills => {
			this.setState({ bills })
		}).fail( data => {
			alert('Something went wrong with getting the bills');
		})
	}

	displayBills() {
		return (
			this.state.bills.map( bill => {
				return(
					<div key={`bill-${bill.id}`}>
						<h5>{bill.name}</h5>
						<p>Amount: {bill.amount} | Due Date: {bill.due_date}</p>
					</div>
				)
			})
		)
	}

	render() {
		if(this.state.bills.length > 0) {
			return(
				<div>
					<h4><Link to={`/bills/${this.props.userId}`}>Monthly Bills</Link></h4>
					{this.displayBills()}
				</div>
			)
		} else {
			return(<p>Loading bills...</p>)
		}
	}
}

export default DashBills