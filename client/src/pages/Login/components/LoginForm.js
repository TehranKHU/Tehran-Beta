import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { loginUser } from '../../../actions/authActions';
import { clearErrors } from '../../../actions/errorActions';
import PropTypes from 'prop-types';

class LoginForm extends Component {
	state = {
		username : '',
		password : '',
		msg      : null
	};

	focusHandler() {
		let parent = this.parentNode.parentNode;
		parent.classList.add('input-container--focus');
	}

	blurHandler() {
		if (this.value !== '') return;

		let parent = this.parentNode.parentNode;
		parent.classList.remove('input-container--focus');
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	clickedOnSubmitButton = (e) => {
		e.preventDefault();

		this.props.clearErrors();

		const { username, password } = this.state;

		const user = {
			username,
			password
		};

		this.props.loginUser(user);
	};

	componentDidMount() {
		const inputs = document.querySelectorAll('input');

		inputs.forEach((input) => {
			input.addEventListener('focus', this.focusHandler);
			input.addEventListener('blur', this.blurHandler);
		});
	}

	componentDidUpdate(prevProps) {
		const { error } = this.props;

		if (error !== prevProps.error) {
			// Check for login fail
			if (error.id === 'LOGIN_FAIL') {
				this.setState({ msg: error.msg });
			} else {
				this.setState({ msg: null });
			}
		}
	}

	render() {
		if (this.props.isAuthenticated) return <Redirect to='/dashboard' />;

		return (
			<React.Fragment>
				{this.state.msg ? (
					<span className='alert alert-error'>{this.state.msg}</span>
				) : null}

				<div className='form-wrapper'>
					<span className='form-wrapper__title'>وارد شوید!</span>
					<form
						onSubmit={this.clickedOnSubmitButton}
						className='login-form'>
						<div className='input-container'>
							<div className='input-container__icon'>
								<i className='fa fa-user' />
							</div>
							<div>
								<h5>نام کاربری</h5>
								<input
									type='text'
									name='username'
									autoComplete='off'
									onChange={this.onChange}
								/>
							</div>
						</div>

						<div className='input-container'>
							<div className='input-container__icon'>
								<i className='fa fa-lock' />
							</div>
							<div>
								<h5>رمز عبور</h5>
								<input
									type='text'
									name='password'
									autoComplete='off'
									onChange={this.onChange}
								/>
							</div>
						</div>

						<input
							type='submit'
							className='login-button'
							value='ورود'
						/>

						<span className='login-form__have-account'>
							<a href='#'>نام کاربری</a>
							<span> یا </span>
							<a href='#'>رمز عبور </a>
							<span>خود را فراموش کردید؟</span>
						</span>
						<span className='login-form__have-account'>
							<span>کاربر جدید هستید؟ </span>
							<a href='/signup'>ثبت نام کنید!</a>
						</span>
					</form>
				</div>
			</React.Fragment>
		);
	}
}

LoginForm.propTypes = {
	isAuthenticated : PropTypes.bool,
	error           : PropTypes.object.isRequired,
	loginUser       : PropTypes.func.isRequired,
	clearErrors     : PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	isAuthenticated : state.authReducer.isAuthenticated,
	error           : state.errorReducer
});

export default connect(mapStateToProps, { loginUser, clearErrors })(LoginForm);
