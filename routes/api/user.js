const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const User = require('../../models/user/User');
const verify = require('../../middleware/userAuth');

router.post(
	'/signup',
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

		try {
			const { email } = req.body;
			let user = await User.findOne({ email: req.body.email });

			if (user) {
				return res.status(400).json({
					errors: [{ msg: `${email} already exists` }],
				});
			}
			const salt = await bcrypt.genSalt(10);

			user = new User({
				isAdmin: req.body.isAdmin,
				username: req.body.username,
				email: req.body.email,
				profilePic: req.body.profilePic,
				password: await bcrypt.hash(req.body.password, salt),
			});

			await user.save();

			const payload = {
				id: user.id,
			};

			const userToken = jwt.sign(payload, process.env.jwtToken, {
				expiresIn: 10800,
			});

			const { password, ...rest } = user._doc;

			res.status(200).json({ ...rest, userToken });
		} catch (err) {
			console.error(err);
			res.status(500).send('Server error');
		}
	}
);

// Update Admin Credentials

router.put(
	'/update/:id',
	[
		verify,
		[
			check('email', 'Email is required with ext @oauife.edu.ng')
				.isEmail()
				.contains('@oauife.edu.ng')
				.normalizeEmail(),
			check('password', 'Password should be at least 8 chars long').isLength({
				min: 8,
			}),
		],
	],
	async (req, res) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({
				errors: errors.array(),
			});
		}

		if (req.user.id === req.params.id || req.user.isAdmin) {
			if (req.body.password) {
				const salt = await bcrypt.genSalt(10);
				req.body.password = await bcrypt.hash(req.body.password, salt);
			}

			try {
				const update = await User.findByIdAndUpdate(
					req.params.id,
					{
						$set: req.body,
					},
					{ new: true }
				);

				res.status(200).json(update);
			} catch (err) {
				console.error(err.message);
				return res.status(500).send('Server error');
			}
		} else {
			return res.status(401).json('You are not authenticated');
		}
	}
);

// Delete Account

router.delete('/delete/:id', async (req, res) => {
	try {
		await User.findByIdAndRemove(req.params.id);
		res.status(200).send('Account deleted...');
	} catch (err) {
		console.error(err.message);
		return res.status(500).send('Server error');
	}
});

// Get Single User

router.get('/find/:id', async (req, res) => {
	try {
		const user = await User.findById(req.params.id);

		const { password, ...rest } = user._doc;
		res.status(200).json(rest);
	} catch (err) {
		console.log(err);
		res.status(500).json('Server Error');
	}
});

// Get All Users

router.get('/', verify, async (req, res) => {
	const query = req.query.new;
	try {
		const users = query
			? await User.find().sort({ _id: -1 }).limit(10)
			: await User.find();

		res.status(200).json(users);
	} catch (err) {
		console.log(err);
		return res.status(500).json('Server Error');
	}
});

// Get Users Stats

router.get('/stats', async (req, res) => {
	try {
		const data = await User.aggregate([
			{ $project: { month: { $month: '$createdAt' } } },
			{
				$group: {
					_id: '$month',
					total: { $sum: 1 },
				},
			},
		]);

		res.status(200).json(data);
	} catch (err) {
		res.status(500).json('Server Error');
	}
});

module.exports = router;
