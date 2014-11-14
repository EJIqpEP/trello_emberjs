App.ListsRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('list');
  }
});
