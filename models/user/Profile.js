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
				required: [true, 'Firstname is required'],
			},
			lname: {
				type: String,
				required: [true, 'Lastname is required'],
			},
			middleName: {
				type: String,
				required: [true, 'Middlename is required'],
			},
			qualification: {
				type: Array,
				required: [true, 'Quakification cannot be empty'],
			},
			rank: {
				type: String,
				required: [true, 'Rank cannot be empty'],
			},
			phoneNumber: {
				type: String,
			},
			desc: {
				type: String,
				required: [true, 'Desc cannot be empty'],
			},
			research: {
				type: [String],
				required: [true, 'Research cannot be empty'],
			},
			gender: {
				type: String,
				required: [true, 'Gender cannot be empty'],
			},
			residence: {
				type: String,
				required: [true, 'Residence cannot be empty'],
			},
		},
		dir: {
			entry: {
				type: String
			},
			directory: {
				type: String
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
