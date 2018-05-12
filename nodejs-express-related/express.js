var express = require('express');
var app = express();
var path = require('path');
app.use(express.static('/home/stgreg13.github.io/check-till'));

// viewed at http://localhost:8080

app.listen(8080);
console.log('listening on port 8080...');
