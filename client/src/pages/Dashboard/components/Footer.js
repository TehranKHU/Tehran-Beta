import React, { Component } from 'react';
import LoginSVG from '../../../components/SVG/LoginSVG';

class Footer extends Component {
	render() {
		return (
			<footer>
				<LoginSVG
					name='FooterBackground'
					className='footer__background'
				/>

				<div className='footer__text-container'>
					کلیۀ حقوق مادی و معنوی این سایت متعلق به گروه طهران می‌باشد.
				</div>
			</footer>
		);
	}
}

export default Footer;
