App.Router.map(function() {
	this.resource('index', {path: '/'});
});

App.IndexRoute = Ember.Route.extend({
	model: function() {
    	return this.store.find('page');
	}
});

App.Router.map(function() {
	this.resource('page', {path: '/page'}, function() {
		this.route('show', {path: '/:page_id'})
		this.route('edit', {path: '/edit/:page_id'});
		this.route('new', {path: '/new/:page_id'});
	});
});

App.PageShowRoute = Ember.Route.extend({
	model: function(params) {
		console.log(params);
		return this.store.find('page', params.page_id);
	}
});