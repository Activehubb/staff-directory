const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: 'user',
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
				type: [Array],
			},
			phoneNumber: {
				type: String,
			},
		},
		category: {
			type: String,
		},
	},
	{ timestamps: true }
);

module.exports = Profile = mongoose.model('profile', ProfileSchema);
