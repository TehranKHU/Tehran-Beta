import React, { Component } from 'react';

class SignupForm extends Component {
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
				<span className='form-wrapper__title'>ثبت نام کنید!</span>
				<form action='' className='signup-form'>
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
							<i className='fa fa-envelope' />
						</div>
						<div>
							<h5>ایمیل</h5>
							<input
								type='text'
								name='email'
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
						className='signup-button'
						value='ورود'
					/>

					<span className='signup-form__have-account'>
						قبلاً ثبت نام کردید؟
						<a href='#'> وارد شوید!</a>
					</span>
				</form>
			</div>
		);
	}
}

export default SignupForm;
