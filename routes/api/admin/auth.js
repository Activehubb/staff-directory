const express = require('express');
const router = express.Router();
const adminAuth = require('../../../middleware/adminAuth');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const dotenv = require('dotenv').config();
const Admin = require('../../../models/admin/Admin');

// Login

router.post(
	'/',
	[
		check('email').isEmail().normalizeEmail(),
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

		const { username, email, password } = req.body;

		try {
			if (username) {
				let admin = await Admin.findOne({
					username,
				});

				if (!admin) {
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
			} else if (email) {
				let admin = await Admin.findOne({
					email,
				});

				if (!admin) {
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
			}
		} catch (err) {
			res.status(500).send('Server error');
			console.log(err.message);
		}
	}
);

// Get Logged In User
router.get('/', adminAuth, async (req, res) => {
	try {
		const adm = await Admin.findById(req.admin.id).select('-password');

		res.json(adm);
	} catch (err) {
		res.status(500).send('Server error');
		console.error(err.message);
	}
});

// Delete Admin

router.delete('/', adminAuth, async (req, res) => {
	try {
		await Admin.findByIdAndDelete(req.admin._id);
		res.status(200).json('Account deleted successfully');
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

module.exports = router;
