const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const Admin = require('../../../models/admin/Admin');
const dotenv = require('dotenv').config();

// Register Account

router.post(
	'/',
	[
		check('username', 'Username is required').not().isEmpty(),
		check('email', 'Email is required with ext @oauife.edu.ng')
			.isEmail()
			.contains('@oauife.edu.ng')
			.normalizeEmail()
			.not()
			.isEmpty(),
		check('password', 'Password should be at least 8 chars long').isLength({
			min: 8,
		}),
	],
	async (req, res) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({
				errors: errors.array(),
			});
		}

		const { username, email, password } = req.body;

		try {
			let admin = await Admin.findOne({ email });

			if (admin) {
				return res.status(400).json({
					errors: [{ msg: `${email} already exists` }],
				});
			}

			admin = new Admin({
				username,
				email,
				password,
			});

			const salt = await bcrypt.genSalt(10);

			admin.password = await bcrypt.hash(password, salt);

			await admin.save();

			const payload = {
				admin: {
					id: admin.id,
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
		} catch (err) {
			console.error(err);
			res.status(500).send('Server error');
		}
	}
);

// Update Admin Credentials

router.put(
	'/:id',
	[
		check('password', 'Password should be at least 8 chars long').isLength({
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

		const { password } = req.body;

		try {
			const updPass = await Admin.findById(req.params.id).select('-password');

			const salt = await bcrypt.genSalt(10);
			const newPass = await bcrypt.hash(password, salt);

			updPass.password = newPass;

			await updPass.save();

			console.log(newPass);
			res.status(200).json('Account updated successfully');
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server error');
		}
	}
);

module.exports = router;
