var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
var router = express.Router();
var logs = require('./models/logs.js');


app.use(express.static(__dirname + '/public'));


// api routes go here


router.get('/logs', function (req, res) {
  logs.selectAll(function (data) {
    var logsObject = { logs: data };
    console.log(logsObject);
    res.send(logsObject);
  });
});

router.post('/logs/create', function (req, res) {
  logs.insertOne(['userId', 'userName', 'bgMgdl', 'readingType', 'notes', 'dateTimeActual'], [req.body.userId, req.body.userName, req.body.bgMgdl, req.body.readingType, req.body.notes, req.body.dateTimeActual], function () {
    res.redirect('/logs');
  });
});

router.post('/signup', function (req, res) {
  console.log(req); 
    res.redirect('/logs');
  });


//edit route for future development
//router.put('/logs/update/:id', function (req, res) {
 // var condition = 'id = ' + req.params.id;

 // console.log(condition);

  //logs.updateOne({ devoured: req.body.devoured }, condition, function () {
   // res.redirect('/logs');
  //});
//});



app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});


app.listen(PORT, function() {
  console.log("Server is running on port:%s", PORT);
});