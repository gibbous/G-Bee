var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
var methodOverride = require('method-override');

var router = express.Router();
var logs = require('./models/logs.js');

var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var passportLocal = require('passport-local');
var flash = require('connect-flash');

//var configDB = require('./app/config/database.js');
//mongoose.connect(configDB.url);
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/G-Bee');
require('./config/passport.js')(passport);



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


app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});


//passport
require('./models/connect.js')(app, passport);




// api routes go here

router.get('/logs', function (req, res) {
  logs.selectAll(function (data) {
    var logsObject = { logs: data };
    console.log(logsObject);
    res.send(logsObject);
  });
});
console.log('creating post', 'logs/create');
app.post('/logs/create', function (req, res) {
    console.log('user', req.user);
    console.log("in logs create",  req.body);
  logs.insertOne(['userId', 'userName', 'bgMgdl', 'readingType', 'notes', 'dateTimeActual'], [req.body.userId, req.body.userName, req.body.reading, req.body.type, req.body.notes, req.body.date], function () {
    res.redirect('/logs');
  });
});

router.post('/signup', function (req, res) {
  console.log(req); 
    res.redirect('/logs');
  });


app.listen(PORT, function() {
  console.log("Server is running on port:%s", PORT);
});
