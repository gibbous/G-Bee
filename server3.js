var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;

var router = express.Router();


var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var passportLocal = require('passport-local');
var flash = require('connect-flash');
var logs = require('./models/logs.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(morgan('dev'));
app.use(cookieParser());
app.use(session({secret: 'anystringoftext',
         saveUninitialized: true,
         resave: true}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());

//var configDB = require('./app/config/database.js');
//mongoose.connect(configDB.url);
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/G-Bee');
require('./config/passport')(passport);

app.use(express.static(__dirname + '/public'));
// api routes go here

router.get('/logs', function (req, res) {
  logs.selectAll(function (data) {
    var logsObject = { logs: data };
    console.log(logsObject);
    res.send(logsObject);
  });
});
//
router.post('/logs/create', function (req, res) {
  logs.insertOne(['userId', 'userName', 'bgMgdl', 'readingType', 'notes', 'dateTimeActual'], [req.body.userId, req.body.userName, req.body.bgMgdl, req.body.readingType, req.body.notes, req.body.dateTimeActual], function () {
    res.redirect('/logs');
  });
});
//
router.post('/signup', function (req, res) {
  console.log(req);
    res.redirect('/logs');
  });


//passport
 // use connect-flash for flash messages stored in session

require('./models/connect.js')(app, passport);

// app.post('/login', function(req, res) {
//   console.log(req.body);
//   res.status(200).end()
// })
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

//passport


app.listen(PORT, function() {
  console.log("Server is running on port:%s", PORT);
});
