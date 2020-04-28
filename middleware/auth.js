const config = require('config');
const jwt = require('jsonwebtoken');

function auth(req, res, next) {
	const token = req.header('x-auth-token');

	// Check token
	if (!token) {
		return res
			.status(401)
			.json({ msg: 'شما اجازه‌ی دسترسی به این بخش را ندارید.' });
	}

	try {
		console.log('--> token --> ', token);

		const decoded = jwt.verify(token, config.get('jwtSecret'));
		req.user = decoded;

		next();
	} catch (e) {
		res.status(400).json({ msg: 'توکن معتبر نیست.' });
	}
}

module.exports = auth;
