import React, { Component } from 'react';

import Header from './components/Header';
import SignupForm from './components/SignupForm';
import Footer from './components/Footer';

import './styles.scss';

class Signup extends Component {
	render() {
		return (
			<div id='container'>
				<Header />
				<SignupForm />
				<Footer />
			</div>
		);
	}
}

export default Signup;
