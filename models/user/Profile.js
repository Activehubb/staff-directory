const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: 'user',
			unique: true,
		},
		bio: {
			type: Object,
			fname: {
				type: String,
			},
			lname: {
				type: String,
			},
			middleName: {
				type: String,
			},
			qualification: {
				type: Array,
			},
			rank: {
				type: String,
			},
			phoneNumber: {
				type: String,
			},
			desc: {
				type: String,
			},
			research: {
				type: [String],
			},
			gender: {
				type: String,
			},
			residence: {
				type: String,
			},
		},
		dir: {
			entry: {
				type: String,
			},
			directory: {
				type: String,
			},
			mainEntry: {
				type: String,
			},
			subEntry: {
				type: String,
			},
		},

		status: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

module.exports = Profile = mongoose.model('profile', ProfileSchema);
