var wiki = require("../models/wiki.js");
var Page = wiki.Page;
var User = wiki.User;
var Edit = wiki.Edit;

var api = {};

api.getPage = function (req, res) {
	Page.find({"_id": req.params.page_id}, function(err, page) {
		if (err) {
			res.send({message: "Error"});
		} else {
			res.send({page: page});
		}
	});
};

api.getPages = function (req, res) {
	Page.find({}, function(err, pages) {
		if (err) {
			res.send({message: "Error"});
		} else {
			res.send({pages: pages})
		}
	});
};

module.exports = api;
