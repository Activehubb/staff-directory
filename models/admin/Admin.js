const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		isAdmin: {
			type: Boolean,
			default: true,
		},
		profilePic: {
			type: String,
		},
	},
	{ timestamps: true }
);

module.exports = Admin = mongoose.model('admin', AdminSchema);
