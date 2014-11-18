App = Ember.Application.create();
// App.ApplicationAdapter = DS.FixtureAdapter;

App.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase: new Firebase('https://flickering-heat-9887.firebaseio.com/')
});
