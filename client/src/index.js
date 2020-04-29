import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

const routing = (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={App} />
			<Route path='/login' component={Login} />
			<Route path='/signup' component={Signup} />
			<Route path='/dashboard' component={Dashboard} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
