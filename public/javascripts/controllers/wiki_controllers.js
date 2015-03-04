App.PagesController = Ember.ArrayController.extend({
  actions: {
    createPage: function() {
      var title = this.get('newTitle');
      if (!title.trim()) { return; }

      var page = this.store.createRecord('page', {
        title: title,
        content: content
      });

      this.set('newTitle', '');
      
      todo.save();
    }
  }
});