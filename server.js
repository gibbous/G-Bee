var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));
// api routes go here


app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});


app.listen(PORT, function() {
  console.log("Server is running on port:%s", PORT);
});
