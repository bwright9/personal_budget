import React from 'react';

class Profile extends React.Component {
	constructor(props){
		super(props)
		this.state = { user: null }
	}

	componentWillMount() {
		$.ajax({
			url: `/api/users/${this.props.params.user_id}`,
			type: 'GET',
			dataType: 'JSON'
		}).done( user => {
			this.setState({ user })
		})
	}

	render() {
		return(
			<h1>User Name: {this.state.user.name}</h1>
		)
	}
}

export default Profile