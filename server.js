var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
//var methodOverride = require('method-override');


var router = express.Router();


//var router = express.Router();
var logs = require('./models/logs.js');

var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var passportLocal = require('passport-local');
var flash = require('connect-flash');
var logs = require('./models/logs.js');

<<<<<<< HEAD
=======
//var configDB = require('./app/config/database.js');
//mongoose.connect(configDB.url);
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/G-Bee');
require('./config/passport.js')(passport);



//passport
>>>>>>> master
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(morgan('dev'));
app.use(cookieParser());
app.use(session({secret: 'anystringoftext',
         saveUninitialized: true,
         resave: true}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

//var configDB = require('./app/config/database.js');
//mongoose.connect(configDB.url);
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/G-Bee');
require('./config/passport.js')(passport);

app.use(express.static(__dirname + '/public'));

// app.get('*', function(req, res) {
//   res.sendFile(__dirname + '/public/index.html');
// });


//passport
// require('./models/connect.js')(app, passport);




// api routes go here


// app.get('/logs', function (req, res) {
//   logs.selectAll(function (data) {
//     var logsObject = { logs: data };
//     console.log(logsObject);
//     res.send(logsObject);
//   });
// });
// console.log('creating post', 'logs/create');
// app.post('/logs/create', function (req, res) {
//     console.log('user', req.user);
//     console.log("in logs create",  req.body);
//   logs.insertOne(['userId', 'userName', 'bgMgdl', 'readingType', 'notes', 'dateTimeActual'], [req.body.userId, req.body.userName, req.body.reading, req.body.type, req.body.notes, req.body.date], function () {
//     res.redirect('/logs');
//   });
// });
//
// app.post('/signup', function (req, res) {
//   console.log(req);
//     res.redirect('/logs');
//   });
//
//
// app.listen(PORT, function() {
//   console.log("Server is running on port:%s", PORT);
// });

app.get('/logs', function (req, res) {
  logs.selectAll(function (data) {
    var logsObject = { logs: data };
    console.log(logsObject);
    res.send(logsObject);
  });
});

console.log('creating post', 'logs/create');

app.post('/logs/create', function (req, res) {
  logs.insertOne(['userId', 'userName', 'bgMgdl', 'readingType', 'notes', 'dateTimeActual'], [req.body.userId, req.body.userName, req.body.bgMgdl, req.body.readingType, req.body.notes, req.body.dateTimeActual], function () {
    res.redirect('/logs');
  });
});
//


//passport
 // use connect-flash for flash messages stored in session

require('./models/connect.js')(app, passport);

// app.post('/login', function(req, res) {
//   console.log(req.body);
//   res.status(200).end()
// })
app.get('*', function(req, res) {
  console.log('jdnjsdjsndjsndjsndjnsjn')
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/signup', function (req, res) {
  console.log(req);
    res.redirect('/login');
  });

app.post('/login', function (req, res) {
  console.log(req);
    res.redirect('/home');
  });

require('./models/connect.js')(app, passport);

app.listen(PORT, function() {
  console.log("Server is running on port:%s", PORT);
});
