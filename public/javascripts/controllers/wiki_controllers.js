App.IndexController = Ember.ArrayController.extend({
  sortProperties: ['title'],
  sortAscending: true
})

App.NewController = Ember.Controller.extend({
  actions: {
    save: function() {
      var title = this.get('title');
      var content = this.get('content');
      var newPage = this.store.createRecord('page', {
        title: title,
        content: content
      });
      console.log(newPage);
      newPage.save();
      this.set('title','');
      this.set('content','');
      this.transitionToRoute('page.index', newPage);
    }
  }
});

App.PageEditController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      var title = this.get('model.title');
      var content = this.get('model.content');
      this.get('model').save();
      this.transitionToRoute('page.index', this.get('model'));
    }
  }
});

App.ApplicationController = Ember.Controller.extend({
  actions: {
    search: function() {
      var title = this.get('title');
      this.set('title', '');
      this.transitionToRoute('search', title);
    }
  }
});