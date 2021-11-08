const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const DB = async () => {
	try {
		await mongoose.connect(
			process.env.MONGO_URI,
			console.log('mongoDB connected successfully')
		);
	} catch (err) {
		console.log(`DB err ${err.message}`);
	}
};

module.exports = DB;
