const express = require('express');
const router = express.Router();
const Profile = require('../../../models/user/Profile');
const { check, validationResult } = require('express-validator');
const User = require('../../../models/user/User');
const userAuth = require('../../../middleware/userAuth')

router.post(
	'/',
	[
		userAuth,
		[
			check('fname', 'Firstname is required').not().isEmpty(),
			check('lname', 'Lastname is required').not().isEmpty(),
			check('qualification', 'Qualification is required').not().isEmpty(),
		],
	],
	async (req, res) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(401).json({
				errors: errors.array(),
			});
		}

		const {
			fname,
			lname,
			qualification,
			phoneNumber,
			center,
			department,
			institute,
			unit,
		} = req.body;

		const profileFields = {};

		profileFields.bio = {};

		profileFields.category = {};

		profileFields.user = req.user.id;

		if (fname) profileFields.bio.fname = fname;
		if (lname) profileFields.bio.lname = lname;
		if (qualification) profileFields.bio.qualification = qualification;
		if (phoneNumber) profileFields.bio.phoneNumber = phoneNumber;
		if (center) profileFields.category.center = center;
		if (department) profileFields.category.department = department;
		if (institute) profileFields.category.institute = institute;
		if (unit) profileFields.category.unit = unit;

		try {
			const user = await User.findById(req.user.id);
			if (user) {
				try {
					const profile = new Profile(profileFields);

					await profile.save();

					res.status(200).json(profile);
                } catch (err) {
                    console.log(err.message)
                    res.status(500).send('Server ERR')
                }
			}
		} catch (err) {
			console.log(err.message);
			res.status(500).json({msg: 'User not found'});
		}
	}
);

module.exports = router;
