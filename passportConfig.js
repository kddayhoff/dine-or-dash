const User = require('./models/user');
const bcrypt = require('bcryptjs');
const localStrategy = require('passport-local').Strategy;
const passport = require('passport');

passport.serializeUser((user, cb) => {
	cb(null, user.id);
});
passport.deserializeUser((id, cb) => {
	User.findOne({ _id: id }, (err, user) => {
		cb(err, user);
	});
});

module.exports = function (passport) {
	passport.use(
		new localStrategy((username, password, done) => {
			User.findOne({ username: username })
				.populate('menus')
				.then((user) => {
					if (!user) return done(null, false);
					bcrypt.compare(password, user.password, (err, result) => {
						if (err) throw err;
						if (result === true) {
							return done(null, user);
						} else {
							return done(null, false);
						}
					});
				})
				.catch((err) => {
					if (err) throw err;
				});
		})
	);
};
