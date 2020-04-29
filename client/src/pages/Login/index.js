import React, { Component } from 'react';

import { Provider } from 'react-redux';
import store from '../../store';

import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';

import './styles.scss';

class Login extends Component {
	render() {
		return (
			<Provider store={store}>
				<div id='container'>
					<Header />
					<LoginForm />
					<Footer />
				</div>
			</Provider>
		);
	}
}

export default Login;
