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

	navLink() {
		if (this.props.formType === "sign-in") {
			return <Link to="/sign-up">sign up instead</Link>;
		} else {
			return <Link to="/sign-in">sign in instead</Link>;
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
			<div className="login-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">
					Please {this.props.formType} or {this.navLink()}
					{this.renderErrors()}
					<div className="login-form">
						<br/>
						<label> Username:
							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input" />
						</label>
						<br/>
						<label> Password:
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" />
						</label>
						<br/>
						<input type="submit" value="Submit" />
					</div>
				</form>
				<button
					type="button"
					onClick={this.handleGuest}
					className="guest-login">
					Guest
				</button>
			</div>
		);
	}

}

export default withRouter(AuthForm);
