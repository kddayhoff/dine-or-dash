const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: { type: String, required: true },
	password: { type: String, required: true },
	date: { type: Date, default: Date.now },
	goals: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Goal',
		},
	],
});

userSchema.plugin(passportLocalMongoose);
const User = mongoose.model('User', userSchema);

module.exports = User;
