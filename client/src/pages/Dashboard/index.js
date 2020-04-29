import React, { Component } from 'react';

import { Provider } from 'react-redux';
import store from '../../store';
import { loadUser } from '../../actions/authActions';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import './styles.scss';

class Dashboard extends Component {
	componentWillMount() {
		console.log('--> dashboard index --> componentWillMount');
		store.dispatch(loadUser());
	}

	render() {
		return (
			<Provider store={store}>
				<div id='container'>
					{/* <Header /> */}
					<header>This is a header</header>
					<Main />
					{/* <Footer /> */}
					<footer>This is a footer</footer>
				</div>
			</Provider>
		);
	}
}

export default Dashboard;
