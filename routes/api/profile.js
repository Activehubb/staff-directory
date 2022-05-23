const express = require('express');
const router = express.Router();
const Profile = require('../../models/user/Profile');
const User = require('../../models/user/User');
const verify = require('../../middleware/userAuth');

router.post('/create', verify, async (req, res) => {
	const {
		fname,
		avatar,
		lname,
		qualification,
		phoneNumber,
		rank,
		desc,
		research,
		entry,
		department,
		faculty,
		unit,
		college,
		center,
		gender,
		residence,
	} = req.body;

	const profileFields = {};

	profileFields.bio = {};

	profileFields.directory = {};

	profileFields.user = req.user.id;

	if (fname) profileFields.bio.fname = fname;
	if (avatar) profileFields.bio.avatar = avatar;
	if (lname) profileFields.bio.lname = lname;
	if (rank) profileFields.bio.rank = rank;
	if (desc) profileFields.bio.desc = desc;
	if (gender) profileFields.bio.gender = gender;
	if (residence) profileFields.bio.residence = residence;
	if (research)
		profileFields.bio.research = research.split(',').map((res) => res.trim());
	if (qualification) profileFields.bio.qualification = qualification;
	if (phoneNumber) profileFields.bio.phoneNumber = phoneNumber;

	if (entry) profileFields.directory.entry = entry;
	if (department) profileFields.directory.department = department;
	if (faculty) profileFields.directory.faculty = faculty;
	if (college) profileFields.directory.college = college;
	if (center) profileFields.directory.center = center;
	if (unit) profileFields.directory.unit = unit;

	try {
		const userId = await Profile.findOne({ user: req.user.id });
		if (userId) {
			return res
				.status(403)
				.json('Access denied you can only create your profile once...');
		}
		const profile = new Profile(profileFields);

		await profile.save();

		res.status(200).json(profile);
	} catch (err) {
		console.error(err.message);
		return res.status(500).send('Server ERR');
	}
});

router.put('/:id', verify, async (req, res) => {
	const { fname, lname, qualification, phoneNumber, category } = req.body;

	const profileFields = {};

	profileFields.bio = {};

	profileFields.user = req.user.id;

	if (fname) profileFields.bio.fname = fname;
	if (lname) profileFields.bio.lname = lname;
	if (qualification) profileFields.bio.qualification = qualification;
	if (phoneNumber) profileFields.bio.phoneNumber = phoneNumber;
	if (category) profileFields.category = category;

	try {
		const user = await User.findById(req.user.id);
		if (user) {
			try {
				const profile = await Profile.findByIdAndUpdate(
					req.params.id,
					{ $set: profileFields },
					{ new: true }
				);

				res.status(200).json(profile);
			} catch (err) {
				console.error(err.message);
				res.status(500).send('Server ERR');
			}
		}
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ msg: 'User not found' });
	}
});

// UPDATE STATUS

router.put('/status/:id', async (req, res) => {
	try {
		const status = await Profile.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true }
		).populate('user', ['profilePic', 'email', 'username']);

		res.status(200).json(status);
	} catch (error) {
		res.status(500).json('Server ERR');
		console.log(error);
	}
});

// UPDATE STATUS

// Get Profile

router.get('/', verify, async (req, res) => {
	try {
		const profile = await Profile.findOne({ user: req.user.id }).populate(
			'user',
			['email', 'username', 'profilePic']
		);

		res.status(200).json(profile);
	} catch (err) {
		console.error(err.message);
	}
});

// Get All Profile

router.get('/profiles', async (req, res) => {
	try {
		const profile = await Profile.find().populate('user', [
			'profilePic',
			'email',
			'username',
		]);

		res.status(200).json(profile);
	} catch (err) {
		console.error(err.message);
	}
});

// Get Profile By Id

router.get('/user/:id', async (req, res) => {
	try {
		const profile = await Profile.findById(req.params.id).populate('user', [
			'email',
			'username',
			'profilePic',
		]);

		res.status(200).json(profile);
	} catch (err) {
		console.error(err.message);
	}
});

router.delete('/delete/:id', async (req, res) => {
	try {
		await Profile.findByIdAndRemove(req.params.id);
		res.status(200).json('Account deleted...');
	} catch (error) {
		res.status(500).json('Server Error');
	}
});

module.exports = router;
