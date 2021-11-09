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
				required: true,
			},
			lname: {
				type: String,
				require: true,
			},
			qualification: {
				type: [Array],
				required: true,
			},
			phoneNumber: {
				type: String,
			},
		},
		category: {
			center: {
				type: String,
			},
			department: {
				type: String
			},
			institute: {
				type: String
			},
			unit: {
				type: String
			}
		}
	},
	{ timestamps: true }
);

module.exports = Profile = mongoose.model('profile', ProfileSchema);
