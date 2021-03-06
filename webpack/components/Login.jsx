import React from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

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
		}).done( success => {
		}).done( user => {
			if(user) {
				browserHistory.push(`/dashboard/${user.id}`)
			} else {
				alert('Incorrect Email or Password')
				this.refs.email.value = ''
			}
		}).fail( data=> {
			alert('Something went wrong :/')
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
				<Link to={'/signup'}>Sign Up</Link >
			</div>
		)
	}
}

export default Login