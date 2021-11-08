const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DepartmentSchema = new Schema(
	{
		departmentUser: {
			type: Schema.Types.ObjectId,
			ref: 'departmentUser',
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

module.exports = Department = mongoose.model('department', DepartmentSchema)
