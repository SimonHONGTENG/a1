var express = require('express');
var app = express();
var cors = require('cors');
// const corsOptions = {
//     origin: 'http://localhost:4200'
// }

app.use(cors());

var path = require('path');