var express = require('express');
var app = express();
app.set('port', process.env.PORT || 4000);

app.get('/yolo', function(req, res) {
    res.send("Hello Yolo!");
});

app.get('/', function(req, res) {
    res.send("Home");
});

console.log('Sarting server on http://localhost:' + app.get('port'))
app.listen(app.get('port'));