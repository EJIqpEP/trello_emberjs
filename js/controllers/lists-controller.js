App.ListsController = Ember.ArrayController.extend({
  actions: {
    createList: function() {
      console.log('createList', this.get('listName'));
      var list = this.store.createRecord('list', {
        listName: this.get('listName')
      });

      this.set('listName', '');

      list.save();
    }
  }
});