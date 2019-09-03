var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());

var path = require('path');


var api = require('./routes/api/login')(app, path);
var group = require('./routes/api/group')(app, path);
var user = require('./routes/api/channel')(app, path);
var user = require('./routes/api/user')(app, path);

app.listen(3000, () => {
    var d = new Date();
    var n = d.getHours();
    var m = d.getMinutes();
    console.log('Server has been started at : ' + n + ':' + m);
});