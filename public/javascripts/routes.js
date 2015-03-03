App.Router.map(function() {
	this.resource('pages', {path: '/'})
});

App.PagesRoute = Ember.Route.extend({
	model: function() {
    	return this.store.find('page');
	}
});