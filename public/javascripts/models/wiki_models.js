App.Page = DS.Model.extend({
	title: DS.attr('string'),
	content: DS.attr('string'),
	edits: DS.hasMany('edit', {async: true})
});

App.Edit = DS.Model.extend({
	user: DS.belongsTo('user', {async: true}),
	editTime: DS.attr('date')
});

App.User = DS.Model.extend({
	name: DS.attr('string')
});


