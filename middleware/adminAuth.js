const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

function verify(req, res, next) {
	const authHeader = req.headers.token;

	if (authHeader) {
		const token = authHeader.split(' ')[1];

		jwt.verify(token, process.env.jwtToken, (err, admin) => {
			if (err) return res.status(403).json('Token is not valid');
			req.admin = admin;
			next();
		});
	} else {
		return res
			.status(401)
			.json({ msg: 'Token does not exist, You are not authorized' });
	}
}

module.exports = verify;
