const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const goalSchema = new Schema({
	title: { type: String, required: true },
	task: String,
	start: { type: Date, default: Date.now },
});

goalSchema.plugin(passportLocalMongoose);
const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;

///can make a model of tasks as an empty array and populate user with tasks along with goals
