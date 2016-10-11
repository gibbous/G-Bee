var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;

var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var passportLocal = require('passport-local');
var flash = require('connect-flash');

// var configDB = require('./app/config/database.js');
// mongoose.connect(configDB.url);
mongoose.connect('mongodb://localhost/G-Bee');
require('./app/config/passport.js')(passport);

app.use(express.static(__dirname + '/public'));
// api routes go here













//passport
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({secret: 'anystringoftext',
				 saveUninitialized: true,
				 resave: true}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

//passport
require('./models/connect.js')(app, passport);

app.listen(PORT, function() {
  console.log("Server is running on port:%s", PORT);
});
