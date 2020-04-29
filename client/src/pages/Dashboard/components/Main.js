import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/authActions';
import PropTypes from 'prop-types';

class Main extends Component {
	render() {
		if (this.props.auth.isLoading) {
			return <h1>Loading ...</h1>;
		}

		const { isAuthenticated, user } = this.props.auth;

		if (!isAuthenticated) return <Redirect to='/login' />;

		return (
			<React.Fragment>
				<h1>Dashboard</h1>
				<h2>Welcome {user.username}</h2>
				<button onClick={this.props.logoutUser}>Logout</button>
			</React.Fragment>
		);
	}
}

Main.propTypes = {
	auth       : PropTypes.object.isRequired,
	logoutUser : PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	auth : state.authReducer
});

export default connect(mapStateToProps, { logoutUser })(Main);
