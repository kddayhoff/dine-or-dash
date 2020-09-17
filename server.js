const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const routes = require('./routes/api-routes');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8000;
const app = express();
require('./passportConfig')(passport);
require('dotenv').config();

// Define middleware here
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
	cors({
		origin: 'http://localhost:3000' || 'http//localhost:8000',
		credentials: true,
	})
);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

// We need to use sessions to keep track of our user's login status
app.use(cookieParser('secretcode'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	session({
		secret: 'secretcode',
		resave: false,
		saveUninitialized: false,
	})
);
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
	console.log('req.session', req.session);
	return next();
});

app.use(routes);
// app.enable('trust proxy');

//Connect to MongoDB
mongoose.connect(
	process.env.MONGODB_URI || 'mongodb://localhost/dineordash',
	{
		useNewUrlParser: true,
		useFindAndModify: false,
		autoIndex: false,
	},
	() => {
		console.log('Mongoose is Connected!!');
	}
);

// Send every other request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, './client/public/index.html'));
});

app.listen(PORT, () => {
	console.log(`🌎 ==> API server now on port http://localhost:${PORT} !`);
});
