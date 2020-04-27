import React, { Component } from 'react';

import HeaderBackground from '../../assets/svg/login/header_background.svg';
import HeaderCircles from '../../assets/svg/login/header_circles.svg';
import HeaderLogo from '../../assets/svg/login/header_logo.svg';
import IocnPerson from '../../assets/svg/login/icon_person.svg';
import IconLock from '../../assets/svg/login/icon_lock.svg';
import IconEmail from '../../assets/svg/login/icon_email.svg';
import FooterBackground from '../../assets/svg/login/footer_background.svg';

function LoginSVG(props) {
	let svg = {};

	switch (props.name) {
		case 'HeaderBackground':
			svg = HeaderBackground;
			break;
		case 'HeaderCircles':
			svg = HeaderCircles;
			break;
		case 'HeaderLogo':
			svg = HeaderLogo;
			break;
		case 'IocnPerson':
			svg = IocnPerson;
			break;
		case 'IconLock':
			svg = IconLock;
			break;
		case 'IconEmail':
			svg = IconEmail;
			break;
		case 'FooterBackground':
			svg = FooterBackground;
			break;
		default:
			console.error('ERROR: ' + props.name + ' cannot be found !');
			return 'Missing SVG';
	}

	return (
		<span className={props.className} style={{ direction: 'ltr' }}>
			<img src={svg} alt={props.name} />
		</span>
	);
}

export default LoginSVG;
