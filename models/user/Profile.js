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

			qualification: {
				type: String,
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
		directory: {
			entry: { type: String },
			faculty: {
				type: String,
			},
			department: {
				type: String,
			},
			college: {
				type: String,
			},
			center: {
				type: String,
			},
			unit: {
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
