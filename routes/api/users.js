const express = require('express');
const router = express.Router();

const database = require('./database');
const errorHandler = require('../../helpers/error_handler');

// @route	GET		api/users
// @desc	Get All Users
// @acess	Public
router.get('/', (req, res) => {
	let command = 'SELECT * FROM user;';
	database.query(command, (err, result) => {
		if (err) {
			errorHandler('Cannot SELECT users data !', err);
		} else {
			res.send(result);
		}
	});
});

// @route	GET		api/users
// @desc	Get User by Username
// @acess	Public
router.get('/:username', (req, res) => {
	let command = `SELECT * FROM user WHERE username='${req.params.username}'`;

	database.query(command, (err, result) => {
		if (err) {
			errorHandler('Cannot SELECT user data !', err);
		} else {
			// TODO: Filter results; For example password should not be sent
			res.send(result);
		}
	});
});

// @route	POST	api/users
// @desc	Add New User
// @acess	Public
router.post('/', (req, res) => {
	const { username, password, email } = req.body;

	let command = `SELECT * FROM user WHERE username="${username}"`;

	database.query(command, (err, result) => {
		if (err) {
			errorHandler('Cannot SELECT user data !', err);
		} else if (result.length > 0) {
			// TODO: Send error message to user
			errorHandler('User already exists !', err);
		} else {
			command =
				'INSERT INTO user(username, password, email, join_date) ' +
				`VALUES('${username}', '${password}', '${email}', '${Date.now()}');`;

			database.query(command, (err) => {
				if (err) {
					errorHandler('Cannot INSERT new user !', err);
				} else {
					// TODO: Make user loged in
					res.send("it's all OK !");
				}
			});
		}
	});
});

// @route	DELETE	api/users
// @desc	Delete Existing User
// @acess	Public
router.delete('/', (req, res) => {
	console.log('--> delete');
	// TODO: Check if request comes from an admin
	let command = `DELETE FROM user WHERE username='${req.body.username}'`;

	database.query(command, (err) => {
		if (err) {
			errorHandler('Cannot DELETE the user !', err);
		} else {
			res.json({ success: true });
		}
	});
});

module.exports = router;
