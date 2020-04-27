const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');

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

	// Validation
	if (!username || !email || !password) {
		return res.status(400).json({ msg: 'لطفاً تمام فیلدها را پر کنید.' });
	}

	// Check for existing model
	let command = `SELECT * FROM user WHERE username="${username}"`;

	database.query(command, (err, result) => {
		if (err) {
			errorHandler('Cannot SELECT user data !', err);
		} else if (result.length > 0) {
			return res
				.status(400)
				.json({ msg: 'این نام کاربری قبلاً در سامانه ثبت شده است.' });
		} else {
			// Create salt & hash
			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(password, salt, (err, hash) => {
					if (err) throw err;

					command =
						'INSERT INTO user(username, password, email, join_date) ' +
						`VALUES('${username}', '${hash}', '${email}', '${Date.now()}');`;

					database.query(command, (err) => {
						if (err) {
							errorHandler('Cannot INSERT new user !', err);
						} else {
							// TODO: Make user loged in
							res.json({
								msg : "It's all OK !"
							});
						}
					});
				});
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
