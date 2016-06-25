import React from 'react';

class SelectOptions extends React.Component {
	constructor(props) {
		super(props);
		this.state = ({ budgets: [] })
		this.createOptions = this.createOptions.bind(this);
	}

	componenetWillMount() {
		$.ajax({
			url: `users/$(this.props.id}/budgets`,
			type: 'GET',
			dataType: 'JSON'
		}).done( budgets => {
			this.setState({ budgets })
		}).fail( data=> {
			alert('something went wrong');
		})
	}

	createOptions() {
		return (
			this.state.budgets.map( budget => {
				<option value={budget.name}>{budget.name}</option>
			})
		)
	}

	render() {
		if(this.state.budgets){
			return(
				{this.createOptions()}
			)
		} else {
			return(<option>Options loading</option>)
		}
	}
}

export default SelectOptions