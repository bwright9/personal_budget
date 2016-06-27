import React from 'react';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';

class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = { mismatch: false };
		this.flash = this.flash.bind(this);
	}

	signUp(e) {
		e.preventDefault();
		let password = this.refs.password.value
		if(password === this.refs.passwordConfirm.value) {
			let name = this.refs.name.value
			let email = this.refs.email.value
			$.ajax({
				url: 'api/users',
				type: 'POST',
				dataType: 'JSON',
				data: { user: { name, email, password } }
			}).done( user => {
				browserHistory.push(`/dashboard/${user.id}`)
			})
		} else {
			this.refs.password.value = ''
			this.refs.passwordConfirm.value = ''
			this.setState({ mismatch: true });
		}
	}

	flash() {
		if(this.state.mismatch){
			return(
				<div className="col s10 offset-s1 center red lighten-2" style={{borderRadius: '20px', marginTop: "10px"}}>
					<h5>Password and Password Confirmation Must Match</h5>
				</div>
			)
		}
	}

	render() {
		return(
			<div className='row'>
				<div className="col s10 m6 offset-s1 offset-m3">
					{this.flash()}
					<div className="clearfix"></div>
					<h2 className="center">Sign Up</h2>
					<form ref="form" onSubmit={this.signUp.bind(this)}>
						<input ref="name" placeholder="Name" required={true}/>
						<input ref="email" placeholder="Email" required={true} type="email"/>
						<input ref="password" placeholder="Password" required={true} type="password"/>
						<input ref="passwordConfirm" placeholder="Password Confirmation" required={true} type="password"/>
						<button type="submit" className="btn-large">Sign Up!</button>
					</form>
					<Link to={'/'}>Log In</Link>
				</div>
			</div>
		)
	}
}

export default SignUp;