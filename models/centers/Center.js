const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CenterSchema = new Schema(
	{
		centerUser: {
			type: Schema.Types.ObjectId,
			ref: 'centerUser',
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
	},
	{ timestamps: true }
);

module.exports = Center = mongoose.model('center', CenterSchema);
