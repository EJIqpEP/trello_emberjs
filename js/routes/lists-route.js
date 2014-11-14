App.ListsRoute = Ember.Route.extend({
  model: function() {
    console.log('lists route');
    return this.store.find('list');
  }
});