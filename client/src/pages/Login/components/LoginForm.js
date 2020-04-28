import React, { Component } from 'react';

class LoginForm extends Component {
	focusHandler() {
		let parent = this.parentNode.parentNode;
		parent.classList.add('input-container--focus');
	}

	blurHandler() {
		if (this.value !== '') return;

		let parent = this.parentNode.parentNode;
		parent.classList.remove('input-container--focus');
	}

	componentDidMount() {
		const inputs = document.querySelectorAll('input');

		inputs.forEach((input) => {
			input.addEventListener('focus', this.focusHandler);
			input.addEventListener('blur', this.blurHandler);
		});
	}

	render() {
		return (
			<div className='form-wrapper'>
				<span className='form-wrapper__title'>وارد شوید!</span>
				<form action='' className='login-form'>
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
		);
	}
}

export default LoginForm;
