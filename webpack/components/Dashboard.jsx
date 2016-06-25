import React from 'react';

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { dashboard: [] };
	}

	componentWillMount() {
		$.ajax({
			url: `/api/users/${this.props.params.userId}`, 
			type: 'GET', 
			dataType: 'JSON'
		}).done( dashboard => {
			this.setState({ dashboard }); 
		}).fail( data => {
			console.log(data); 
		}); 
	}

	displayDashboard() {
	
	}


	render() {
		return(
			<div>
				{this.displayDashboard.bind(this)()}
			</div>
		)
	}
}

export default Dashboard