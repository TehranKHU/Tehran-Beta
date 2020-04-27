import React, { Component } from 'react';

import './styles.scss';

class Login extends Component {
	render() {
		return (
			<div>
				<div className='form-wrapper'>
					<span className='form-wrapper__title'>وارد شوید!</span>
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
							className='singup-button'
							value='ورود'
						/>

						<span className='signup-form__have-account'>
							<a href='#'>نام کاربری</a>
							<span> یا </span>
							<a href='#'>رمز عبور </a>
							<span>خود را فراموش کردید؟</span>
						</span>
						<span className='signup-form__have-account'>
							<span>کاربر جدید هستید؟ </span>
							<a href='#'>ثبت نام کنید!</a>
						</span>
					</form>
				</div>
			</div>
		);
	}
}

export default Login;
