var mongoose = require('mongoose');

var pageSchema = new mongoose.Schema ({
	title: String,
	content: String
});

var Page = mongoose.model('Page', pageSchema);

module.exports.Page = Page;