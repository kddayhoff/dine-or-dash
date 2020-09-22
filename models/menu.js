const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
	menu: { type: String, required: true },
	food: String,
	// start: { type: Date, default: Date.now },
});

menuSchema.plugin(passportLocalMongoose);
const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;

///can make a model of tasks as an empty array and populate user with tasks along with goals
