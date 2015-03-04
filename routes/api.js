var wiki = require("../models/wiki.js");
var Page = wiki.Page;

var api = {};

api.getPage = function (req, res) {
	Page.find({"_id": req.params.page_id}, function(err, page) {
		if (err) {
			res.send(error);
		} else {
			res.send({page: page});
		}
	});
};

api.getPages = function (req, res) {
	Page.find(req.query, function(err, pages) {
		if (err) {
			res.send({error: "Error"});
		} else {
			res.send({pages: pages})
		}
	});
};

api.createNewPage = function (req, res) {
	var newPage = Page(req.body.page);
	newPage.save(function(err) {
		if (err) {
			res.send({error: "Error"});
		}
	});
};

api.updatePage = function (req, res) {
	Page.findByIdAndUpdate(req.params.page_id, req.body.page, function(err) {
		if (err) {
			res.send({error: "Error"})
		}
	})
};

module.exports = api;
