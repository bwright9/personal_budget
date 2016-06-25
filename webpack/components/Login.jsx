import React from 'react';

class Login extends React.Component {
	constructor(props) {
		super(props);

	}

	handleLogin(e) {
		e.preventDefault()
		let email = this.refs.email.value
		let password = this.refs.password.value
		$.ajax({
			url: `/api/login`,
			type: 'POST',
			dataType: 'JSON',
			data:{ email, password }
<<<<<<< HEAD
		}).done( success => {
=======
		}).done( user => {
			if(user) {
				browserHistory.push(`/dashboard/${user.id}`)
			} else {
				alert('Incorrect Email or Password')
				this.refs
			}
		}).fail( data=> {
			alert('Something went wrong :/')
>>>>>>> 585e564f666676ffb5db6ccd7ef3acdd2ee9acbf
		})
	}

	render() {
		return (
			<div className='container'>
				<h1 className="center">Log In</h1>
				<form ref="loginForm" onSubmit={this.handleLogin.bind(this)}>
					<input ref='email' type='email' placeholder='email' />
					<input ref='password' type='password' placeholder='password' />
					<button type='submit' className='btn'>Log In</button>
				</form>
			</div>
		)
	}
}

export default Login