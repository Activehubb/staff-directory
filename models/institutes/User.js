const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InstituteUserSchema = new Schema({
	username: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
});

module.exports = InstituteUser = mongoose.model(
	'InstituteUser',
	InstituteUserSchema
);
