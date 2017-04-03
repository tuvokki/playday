var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send("Hello Yolo!");
});

app.listen(4000);