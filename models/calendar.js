const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const calendarSchema = new Schema({
	events: [
		{
			title: 'Meeting',
			start: true,
			end: true,
			allday: String,
		},
	],
});

goalSchema.plugin(passportLocalMongoose);
const Calendar = mongoose.model('Calendar', calendarSchema);

module.exports = Calendar;
