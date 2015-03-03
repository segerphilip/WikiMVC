var wiki = require("../models/wiki.js");
var Page = wiki.page;
var User = wiki.user;
var Edit = wiki.edit;

var api = {};

api.getPage = function (req, res) {
	console.log(req.params);
};

module.exports = api;
