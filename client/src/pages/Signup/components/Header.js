import React, { Component } from 'react';
import LoginSVG from '../../../components/SVG/LoginSVG';

class Header extends Component {
	render() {
		return (
			<header>
				<LoginSVG
					name='HeaderBackground'
					className='header__background'
				/>

				<div className='header__text-container'>
					<a href='/'>
						<LoginSVG name='HeaderLogo' className='header__logo' />
					</a>

					<nav>
						<ul>
							<li>
								<a href='/signup' className='active'>
									ثبت نام
								</a>
							</li>
							<li>
								<a href='/login'>ورود</a>
							</li>
							<li>
								<a href='/forum'>انجمن</a>
							</li>
							<li>
								<a href='/about-tehran'>دربارۀ طهران</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		);
	}
}

export default Header;
