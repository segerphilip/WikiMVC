App.Router.map(function() {
	this.resource('page', {path: '/pages/:page_id'}, function() {
		this.route('edit', {path: '/:page_id/edit'});
	});
	this.route('new', {path: '/pages/new'});
	this.resource('error', {path: '/error/:error'});
	this.route('search', {path: '/search/:title'});
});

App.IndexRoute = Ember.Route.extend({
	model: function() {
    	return this.store.find('page');
	}
});

App.PageRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find('page', params.page_id);
	}
});

App.NewRoute = Ember.Route.extend({
	model: function() {
		return Em.Object.create({})
	},
	renderTemplate: function(){
		this.render('new', {
			controller: 'New'
		});
	}
});

App.PageEditRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find('page', params.page_id);
	}
});

App.SearchRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find('page', {title: params.title});
	}
})
