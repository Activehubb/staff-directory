const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const dotenv = require('dotenv').config();
const User = require('../../../models/user/User');
const userAuth = require('../../../middleware/userAuth');
const Profile = require('../../../models/user/Profile');

// Get All User
router.get('/users', async (req, res) => {
	try {
		const users = await User.find()

		res.json(users)
 	} catch (err) {
		console.error(err.message);
		res.status(200).send('Server ERR')
	}
})


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
				let user = await User.findOne({
					username,
				});

				if (!user) {
					return res.status(400).json({
						errors: [{ msg: 'Invalid Credentials' }],
					});
				}

				const validate = await bcrypt.compare(password, user.password);

				if (!validate) {
					return res.status(400).json({
						errors: [{ msg: 'Invalid Credentials' }],
					});
				}

				const payload = {
					user: {
						id: user.id,
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
				let user = await User.findOne({
					email,
				});

				if (!user) {
					return res.status(400).json({
						errors: [{ msg: 'Invalid Credentials' }],
					});
				}

				const validate = await bcrypt.compare(password, user.password);

				if (!validate) {
					return res.status(400).json({
						errors: [{ msg: 'Invalid Credentials' }],
					});
				}

				const payload = {
					user: {
						id: user.id,
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
router.get('/', userAuth, async (req, res) => {
	try {
		const userId = await User.findById(req.user.id).select('-password');

		res.json(userId);
	} catch (err) {
		res.status(500).send('Server error');
		console.error(err.message);
	}
});

// Delete Admin

router.delete('/:id', userAuth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id);
		if (user.id === req.params.id) {
			try {
				await User.findByIdAndDelete(req.params.id);
				await Profile.deleteMany({user:req.user.id})
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
