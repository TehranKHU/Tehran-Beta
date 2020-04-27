import React, { Component } from 'react';

import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';

import './styles.scss';

class Login extends Component {
	render() {
		return (
			<div>
				<Header />
				<LoginForm />
				<Footer />
			</div>
		);
	}
}

export default Login;
