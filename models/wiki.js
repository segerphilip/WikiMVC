var mongoose = require('mongoose');

var pageSchema = new mongoose.Schema ({
	title: String,
	content: String,
	edits: [{type: mongoose.Schema.Types.ObjectId, ref: 'Edit'}]
});

var editSchema = new mongoose.Schema ({
	user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	editTime: Date
});

var userSchema = new mongoose.Schema ({
	name: String
});

var Page = mongoose.model('Page', pageSchema);
var Edit = mongoose.model('Edit', editSchema);
var User = mongoose.model('User', userSchema);

module.exports.Page = Page;
module.exports.Edit = Edit;
module.exports.User = User;