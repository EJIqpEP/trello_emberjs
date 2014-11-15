App.CardController = Ember.ObjectController.extend({
  isEditing: false,
  newList: null,
  needs: ['lists'],

  removeCardFromList : function(){
    var card = this.get( 'model' ),
    list = card.get( 'list' );
    list.get( 'cards' ).removeObject( card );
  },

  updateList: function() {
    console.log('updateList', this.get('list'));
    var card = this.get('model'),
      list = card.get('list'),
      newList = this.get('newList');

    this.removeCardFromList();

    newList.get('cards').pushObject(card);

    card.set('list', this.get('newList'));

    card.save().then(function() {
      list.save();
      newList.save();
    });
  }.observes('newList'),

  actions: {
    editCard: function() {
      console.log('editCard', this);
      this.set('isEditing', true);
    },

    deleteCard: function(card) {
      card.destroyRecord();
    },

    updateCard: function() {
      this.set('isEditing', false);
    }
  }
});
