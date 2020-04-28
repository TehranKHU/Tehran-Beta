import React, { Component } from 'react';

import { connect } from 'react-redux';
import { signupUser } from '../../../actions/authActions';
import PropTypes from 'prop-types';

class SignupForm extends Component {
	state = {
		name     : '',
		email    : '',
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
		console.log(this.state);
	};

	clickedOnSubmitButton = (e) => {
		e.preventDefault();

		const { username, email, password } = this.state;

		const newUser = {
			username,
			email,
			password
		};

		this.props.signupUser(newUser);
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
			// Check for signup fail
			if (error.id === 'SIGNUP_FAIL') {
				this.setState({ msg: error.msg });
			} else {
				this.setState({ msg: null });
			}
		}
	}

	render() {
		return (
			<React.Fragment>
				{this.state.msg ? (
					<span className='alert alert-error'>{this.state.msg}</span>
				) : null}

				{/* <span className='alert alert-error'>این یک ارور میباشد!</span> */}

				<div className='form-wrapper'>
					<span className='form-wrapper__title'>ثبت نام کنید!</span>
					<form
						onSubmit={this.clickedOnSubmitButton}
						className='signup-form'>
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
								<i className='fa fa-envelope' />
							</div>
							<div>
								<h5>ایمیل</h5>
								<input
									type='text'
									name='email'
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
							className='signup-button'
							value='ثبت نام'
						/>

						<span className='signup-form__have-account'>
							قبلاً ثبت نام کردید؟
							<a href='#'> وارد شوید!</a>
						</span>
					</form>
				</div>
			</React.Fragment>
		);
	}
}

SignupForm.propTypes = {
	isAuthenticated : PropTypes.bool,
	error           : PropTypes.object.isRequired,
	signupUser      : PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	isAuthenticated : state.authReducer.isAuthenticated,
	error           : state.errorReducer
});

export default connect(mapStateToProps, { signupUser })(SignupForm);
