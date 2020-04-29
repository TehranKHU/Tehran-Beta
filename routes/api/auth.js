const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const authMiddleware = require('../../middleware/auth');

const database = require('./database');
const errorHandler = require('../../helpers/error_handler');

// @route	POST	api/auth
// @desc	Auth User
// @acess	Public
router.post('/', (req, res) => {
	const { username, password, email } = req.body;

	// Validation
	if (!username || !password) {
		return res.status(400).json({ msg: 'لطفاً تمام فیلدها را پر کنید.' });
	}

	// Check for existing user
	let command = `SELECT * FROM user WHERE username="${username}"`;

	database.query(command, (err, result) => {
		if (err) {
			errorHandler('Cannot SELECT user data !', err);
		} else if (result.length == 0) {
			return res
				.status(400)
				.json({ msg: 'چنین کاربری در سامانه وجود ندارد.' });
		} else {
			// Validate password
			bcrypt.compare(password, result[0].password).then((isMatch) => {
				if (!isMatch)
					return res
						.status(400)
						.json({ msg: 'نام کاربری یا رمز عبور صحیح نمی‌باشد.' });

				jwt.sign(
					{ username: username },
					config.get('jwtSecret'),
					{ expiresIn: 60 },
					(err, token) => {
						if (err) throw err;

						res.json({
							token : token
						});
					}
				);
			});
		}
	});
});

// @route	GET		api/auth/user
// @desc	Auth User
// @acess	Private
router.get('/user', authMiddleware, (req, res) => {
	let command = `SELECT * FROM user WHERE username="${req.user.username}"`;

	database.query(command, (err, result) => {
		delete result[0].password;
		res.json(result[0]);
	});
});

module.exports = router;
