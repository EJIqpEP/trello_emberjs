App.ListsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('list');
  }
});
