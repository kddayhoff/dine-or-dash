const passport = require('passport');
const router = require('express').Router();
const usersController = require('../controllers/usersController');
const menuController = require('../controllers/menuController');

//this will allow a new user to register their info//email and password that is then hashed/encrypted
router.route('/signup').post(usersController.signup);

//allows a user to login --- routing the page to the dashboard after login happens on the react side in State
router
	.route('/login')
	.post(passport.authenticate('local'), usersController.login);

//Allows a user to get their info (goals and tasks), , delete should allow a user to delete a specific goal, unable to delete specific tasks at the moment
router.route('/dashboard/menus').get(usersController.findGoals);

router.route('/dashboard').post(menuController.create);
//.post will allow users to create a goal that pushes to their unique user id

router.route('/dashboard/menus/:id').delete(menuController.delete);

router.route('/user').get(usersController.getUser);

// Route for logging user out --- routing to the page to the homepage after logout happens with react State
router.route('/logout').get(usersController.logout);

module.exports = router;
