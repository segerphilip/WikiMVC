App.Router.map(function() {
	this.resource('hello', {path: '/'})
});

App.Router.map(function() {
	this.resource('page', {path: '/page/:page_id'})
	console.log("hi");
});

App.PageRoute = Ember.Route.extend({
	model: function(params) {
		console.log(params)
    	return this.store.find('page', params.page_id);
	},

	serialize: function(page) {
		return { page_id: page.get('id') };
	}
});