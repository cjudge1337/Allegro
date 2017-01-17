import React from 'react';
import { Link, withRouter } from 'react-router';

class AuthForm extends React.Component {
constructor(props) {
		super(props);
		this.state = { username: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleGuest = this.handleGuest.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/home");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm(user).then(() => this.props.router.push("/home"));
	}

	handleGuest(e) {
		e.preventDefault();
		this.props.demoLogin().then(() => this.props.router.push("/home"));
	}

	title() {
		if (this.props.formType === "sign-in") {
			return ( <h3 className="form-title">Sign In</h3> );
		} else {
			return ( <h3 className="form-title">Sign Up</h3> );
		}
	}

	navLink() {
		if (this.props.formType === "sign-in") {
			return <Link to="/sign-up">Sign up instead</Link>;
		} else {
			return <Link to="/sign-in">Sign in instead</Link>;
		}
	}

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		return (
			<div className="login-page-container">
				<img src="/assets/logo.png" className="logo" />
				<div className="login-form-container">
					<form onSubmit={this.handleSubmit} className="login-form-box">
						{this.title()}
						{this.navLink()}
						{this.renderErrors()}
						<div className="login-form">
							<br/>
							<label className="form-label">
								<input type="text"
									placeholder="Username"
									value={this.state.username}
									onChange={this.update("username")}
									className="login-input" />
							</label>
							<br/>
							<label className="form-label">
								<input type="password"
									placeholder="Password"
									value={this.state.password}
									onChange={this.update("password")}
									className="login-input" />
							</label>
							<br/>
							<button>Submit</button>
						</div>
					</form>
					<button
						type="button"
						onClick={this.handleGuest}
						className="guest-login">
						Guest
					</button>
				</div>
			</div>
		);
	}

}

export default withRouter(AuthForm);
