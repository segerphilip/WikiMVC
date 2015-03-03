window.App = Ember.Application.create({
	LOG_TRANSITIONS: true
})

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.RESTAdapter = DS.RESTAdapter.extend({
    url: 'http://localhost:3000',
    namespace: 'api',

    serializer: DS.RESTSerializer.extend({
        primaryKey: function(type) {
            return '_id';
        }
    })
});

App.Store = DS.Store.extend({
    revision: 12,
    adapter: App.RESTAdapter
});
