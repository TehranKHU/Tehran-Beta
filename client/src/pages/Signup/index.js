import React, { Component } from 'react';

import { Provider } from 'react-redux';
import store from '../../store';

import Header from './components/Header';
import SignupForm from './components/SignupForm';
import Footer from './components/Footer';

import './styles.scss';

class Signup extends Component {
	render() {
		return (
			<Provider store={store}>
				<div id='container'>
					<Header />
					<SignupForm />
					<Footer />
				</div>
			</Provider>
		);
	}
}

export default Signup;
