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
})

// This is data used for development only.
App.Page.FIXTURES = [
	{
		id: 1,
		title: 'Olinjs',
		content: 'What a great class!',
		edits: [1, 2]
	}
];

App.Edit.FIXTURES = [
	{
		id: 1,
		user: 'Philip',
		editTime: new Date("2015-3-1"),
		page: 1
	},
	{
		id: 2,
		user: 'Marena',
		editTime: new Date("2015-2-20"),
		page: 1
	}
];


