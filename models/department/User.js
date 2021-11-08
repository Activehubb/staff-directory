const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DepartmentUserSchema = new Schema({
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

module.exports = DepartmentUser = mongoose.model(
	'departmentUser',
	DepartmentUserSchema
);
