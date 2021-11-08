const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InstituteSchema = new Schema(
	{
		instituteUser: {
			type: Schema.Types.ObjectId,
			ref: 'InstituteUser',
		},
		education: [
			{
				school: {
					type: String,
					required: true,
				},
				degree: {
					type: String,
					required: true,
				},
				fieldofstudy: {
					type: String,
					required: true,
				},
				from: {
					type: Date,
					required: true,
				},
				to: {
					type: Date,
				},
				current: {
					type: Boolean,
					default: false,
				},
				description: {
					type: String,
				},
			},
		],
		social: {
			youtube: {
				type: String,
			},
			twitter: {
				type: String,
			},
			facebook: {
				type: String,
			},
			linkedIn: {
				type: String,
			},
			Instagram: {
				type: String,
			},
		},
	},
	{ timestamps: true }
);

module.exports = Institute = mongoose.model('institute', InstituteSchema);
