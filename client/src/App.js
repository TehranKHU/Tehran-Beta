import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/userActions';

class App extends Component {
	componentDidMount() {
		store.dispatch(loadUser());
	}

	render() {
		return (
			<Provider store={store}>
				<div className='App'>
					<h1>Hello World !</h1>
				</div>
			</Provider>
		);
	}
}

export default App;
