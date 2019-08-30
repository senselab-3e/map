
var express = require('express');
var app = express();
var PORT = 3000;
var server = app.listen(PORT, listening);

function listening(){
  console.log('listening at ${PORT}');
}

app.use(express.static('mapz'));
