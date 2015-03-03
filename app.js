var express  = require('express');
var path = require('path');
var mongoose = require('mongoose');
var api = require('./routes/api.js');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var mongoURI = process.env.MONGOURI || "mongodb://localhost/test";

var app = express();
mongoose.connect(mongoURI);

app.use(express.static(__dirname + '/public/' ));
app.use(bodyParser.json());

app.get('/api/pages/:page_id', api.getPage);

app.get('/api/pages/', api.getPages);

app.post('/api/pages', api.createNewPage);

app.put('/api/pages/:page_id', api.updatePage);

app.listen(port);