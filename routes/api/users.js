const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');

const database = require('./database');
const errorHandler = require('../../helpers/error_handler');
const getCurrentDate = require('../../helpers/date_handler');
const remapUserColumns = require('../../helpers/user_information_handler');

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
						`VALUES('${username}', '${hash}', '${email}', '${getCurrentDate()}');`;

					database.query(command, (err) => {
						if (err) {
							errorHandler('Cannot INSERT new user !', err);
						} else {
							command = `SELECT * FROM user WHERE username="${username}"`;

							database.query(command, (err, result) => {
								if (err) {
									errorHandler(
										'Cannot SELECT user data !',
										err
									);
								} else {
									jwt.sign(
										{ username: username },
										config.get('jwtSecret'),
										{ expiresIn: 3600 },
										(err, token) => {
											if (err) throw err;

											res.json({
												token : token,
												user  : remapUserColumns(
													result[0]
												)
											});
										}
									);
								}
							});
						}
					});
				});
			});
		}
	});
});

module.exports = router;
