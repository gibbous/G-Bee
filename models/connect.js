var User = require('./user');
var passport = require('../config/passport');
module.exports = function(app, passport){
	// app.get('/', function(req, res){
	// 	res.render('index.html');
	// });
	//
	// app.get('/login', function(req, res){
	// 	res.render('login.js', { message: req.flash('loginMessage') });
	// });
	app.post('/login', passport.authenticate('local-login'), function(req, res) {
		var user = {
			_id: req.user._id,
			username: req.user.local.username,
			_expires: req.session.cookie._expires
		}
		res.json(user);
	});
	//
	// app.get('/signup', function(req, res){
	// 	res.render('signup.js', { message: req.flash('signupMessage') });
	// });

	//
	// app.post('/signup', passport.authenticate('local-signup', {
	// 	successRedirect: '/',
	// 	failureRedirect: '/signup',
	// 	failureFlash: true
	// }));
	//
	// app.get('/profile', isLoggedIn, function(req, res){
	// 	res.render('profile.js', { user: req.user });
	// });
	//
	//
	//
	// app.get('/:username/:password', function(req, res){
	// 	var newUser = new User();
	// 	newUser.local.username = req.params.username;
	// 	newUser.local.password = req.params.password;
	// 	console.log(newUser.local.username + " " + newUser.local.password);
	// 	newUser.save(function(err){
	// 		if(err)
	// 			throw err;
	// 	});
	// 	res.send("Success!");
	// });

	app.get('/logout', function(req, res){
		req.logout();
		res.redirect('/');
	})
};

function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()){
		return next();
	}

	res.redirect('/login');
}
