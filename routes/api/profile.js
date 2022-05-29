const express = require('express');
const router = express.Router();
const Profile = require('../../models/user/Profile');
const User = require('../../models/user/User');
const verify = require('../../middleware/userAuth');
const sendEmail = require('../../config/sendEmail');

router.post('/create', verify, async (req, res) => {
	const {
		fname,
		avatar,
		lname,
		middleName,
		qualification,
		phoneNumber,
		rank,
		desc,
		research,
		directory,
		entry,
		mainEntry,
		subEntry,
		gender,
		residence,
	} = req.body;

	const profileFields = {};

	profileFields.bio = {};

	profileFields.dir = {};

	profileFields.user = req.user.id;

	if (fname) profileFields.bio.fname = fname;
	if (middleName) profileFields.bio.middleName = middleName;
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

	if (entry) profileFields.dir.entry = entry;
	if (directory) profileFields.dir.directory = directory;
	if (mainEntry) profileFields.dir.mainEntry = mainEntry;
	if (subEntry) profileFields.dir.subEntry = subEntry;

	try {
		const userProfileId = await Profile.findOne({ user: req.user.id });

		const user = await User.findById(req.user.id);
		if (userProfileId) {
			return res
				.status(403)
				.json('Access denied you can only create your profile once...');
		}
		const profile = new Profile(profileFields);

		await profile.save();

		const profileUrl = `${req.protocol}://${req.get('host')}/api/profile/user/${
			profile.id
		}`;

		const emailMessage = `Congratulation ${profile.bio.fname} ${profile.bio.middleName}\n\nYou have successfully created your profile\n\nYour account is under review for the next 24hrs and will be activated by the administrator\n\nFollow the link below to my profile\n\n${profileUrl}`;

		await sendEmail({
			email: user.email,
			subject: 'Unactivated Profile Status',
			emailMessage,
		});

		res.status(200).json({
			success: true,
			msg: `Email has been sent to ${user.email}`,
		});
	} catch (err) {
		console.error(err.message);
		return res.status(500).json('Server ERR');
	}
});

router.put('/:id', verify, async (req, res) => {
	const {
		fname,
		avatar,
		lname,
		middleName,
		qualification,
		phoneNumber,
		rank,
		desc,
		research,
		directory,
		entry,
		mainEntry,
		subEntry,
		gender,
		residence,
	} = req.body;

	const profileFields = {};

	profileFields.bio = {};

	profileFields.dir = {};

	profileFields.user = req.user.id;

	if (fname) profileFields.bio.fname = fname;
	if (middleName) profileFields.bio.middleName = middleName;
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

	if (entry) profileFields.dir.entry = entry;
	if (directory) profileFields.dir.directory = directory;
	if (mainEntry) profileFields.dir.mainEntry = mainEntry;
	if (subEntry) profileFields.dir.subEntry = subEntry;

	try {
		let profile = await Profile.findById(req.user.id);

		if (!profile.status) {
			return res.status(403).json('This account is under review');
		}

		profile = await Profile.findByIdAndUpdate(
			req.user.id,
			{ $set: profileFields },
			{ new: true }
		);

		res.status(200).json({
			success: true,
			profile,
		});
	} catch (err) {
		console.error(err.message);
		res.status(500).json('Server Error');
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
		console.log(error.message);
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

		if (!profile.status) {
			return res
				.status(403)
				.json({ success: false, msg: 'This profile is being review' });
		}

		res.status(200).json({ profile });
	} catch (err) {
		console.error(err.message);
		res.status(500).json('Server Error');
	}
});

// Get All Profile

router.get('/profiles', async (req, res) => {
	try {
		const profile = await Profile.find({ status: true }).populate('user', [
			'profilePic',
			'email',
			'username',
		]);

		res.status(200).json({
			success: true,
			profile,
		});
	} catch (err) {
		console.error(err.message);
		res.status(500).json('Server Error');
	}
});

router.get('/profiles/unactivate', async (req, res) => {
	try {
		const profile = await Profile.find({ status: false }).populate('user', [
			'profilePic',
			'email',
			'username',
		]);

		res.status(200).json({
			success: true,
			profile,
		});
	} catch (err) {
		console.error(err.message);
		res.status(500).json('Server Error');
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

		if (!profile.status) {
			return res.status(403).json({
				success: false,
				msg: 'This profile is being review',
			});
		}

		res.status(200).json(profile);
	} catch (err) {
		console.error(err.message);
		res.status(500).json('Server Error');
	}
});

router.get('/admin/:id', async (req, res) => {
	try {
		const profile = await Profile.findById(req.params.id).populate('user', [
			'email',
			'username',
			'profilePic',
		]);

		res.status(200).json(profile);
	} catch (err) {
		console.error(err.message);
		res.status(500).json('Server Error');
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
