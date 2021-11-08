const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CenterUserSchema = new Schema({
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

module.exports = CenterUser = mongoose.model('centerUser', CenterUserSchema);
