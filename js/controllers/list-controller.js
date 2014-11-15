App.ListController = Ember.ObjectController.extend({
  needs: ['lists'],
  actions: {
    removeList: function() {
      var list = this.get('model');
      list.destroyRecord();
    },
    createCard: function() {
      var list = this.get('model'),
        card;

      card = this.store.createRecord('card', {
        description: this.get('cardDescription'),
        list: list
      });

      card.save();

      this.set('cardDescription', '');
    },
  }
});
