const express = require('express');
const router = express.Router();
const auth = require('../../../middleware/auth');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const dotenv = require('dotenv').config();
const CenterUser = require('../../../models/centers/User');

// Login

router.post(
	'/',
	[
		check('password', 'Password should be ata least 8 chars long').isLength({
			min: 8,
		}),
	],
	async (req, res) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(401).json({
				errors: errors.array(),
			});
		}

		const { username, email, password } = req.body;

		try {
			if (username) {
				let centerUser = await CenterUser.findOne({
					username,
				});

				if (!centerUser) {
					return res.status(400).json({
						errors: [{ msg: 'Invalid Credentials' }],
					});
				}

				const validate = await bcrypt.compare(password, centerUser.password);

				if (!validate) {
					return res.status(400).json({
						errors: [{ msg: 'Invalid Credentials' }],
					});
				}

				const payload = {
					centerUser: {
						id: centerUser.id,
					},
				};

				jwt.sign(
					payload,
					process.env.jwtToken,
					{ expiresIn: 10800 },
					(err, token) => {
						if (err) throw err;
						res.json({ token });
					}
				);
			} else if (email) {
				let centerUser = await CenterUser.findOne({
					email,
				});

				if (!centerUser) {
					return res.status(400).json({
						errors: [{ msg: 'Invalid Credentials' }],
					});
				}

				const validate = await bcrypt.compare(password, admin.password);

				if (!validate) {
					return res.status(400).json({
						errors: [{ msg: 'Invalid Credentials' }],
					});
				}

				const payload = {
					centerUser: {
						id: centerUser.id,
					},
				};

				jwt.sign(
					payload,
					process.env.jwtToken,
					{ expiresIn: 10800 },
					(err, token) => {
						if (err) throw err;
						res.json({ token });
					}
				);
			}
		} catch (err) {
			res.status(500).send('Server error');
			console.log(err.message);
		}
	}
);

// Get Logged In User
router.get('/', auth, async (req, res) => {
	try {
		const centerUser = await CenterUser.findById(req._id).select('-password');

		res.json(centerUser);
	} catch (err) {
		res.status(500).send('Server error');
		console.error(err.message);
	}
});

// Delete Admin

router.delete('/:id', auth, async (req, res) => {
	try {
		const adm = await Admin.findById(req.admin._id);
		if (adm._id === req.params.id) {
			try {
				await Admin.findByIdAndDelete(req.params.id);
				res.status(200).json('Account deleted successfully');
			} catch (err) {
				console.error(err.message);
				res.status(500).send('Server error');
			}
		}
	} catch (err) {
		console.error(err.message);
		res.status(401).send("Access denied account can't be deleted");
	}
});

module.exports = router;
