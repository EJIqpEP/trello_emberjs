App.LSAdapter = DS.LSAdapter.extend({
  namespace: 'trello'
});

App.ApplicationAdapter = App.LSAdapter;



DS.JSONSerializer.reopen({
    serializeHasMany : function(record, json, relationship) {
        var key = relationship.key;

        var relationshipType = record.constructor.determineRelationshipType(
                record.constructor, relationship);

        if (relationshipType === 'manyToNone' || relationshipType === 'manyToMany' || relationshipType === 'manyToOne') {
            json[key] = Ember.get(record, key).mapBy('id');
        }
    }
});
