const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

module.exports = (req, res, next) => {
	const token = req.header('x-auth-token');

	if (!token) {
		res.status(401).json({ msg: 'Tokens do not exist access denied' });
	}

	try {
		const decoded = jwt.verify(token, process.env.jwtToken);

		req.user = decoded.user;
		next();
	} catch (err) {
		res.status(401).json({ msg: 'Invalid token access denied' });
		console.error(`jwt err: ${err}`);
	}
};
