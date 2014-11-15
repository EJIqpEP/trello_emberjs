App.Card = DS.Model.extend({
  description: DS.attr('string'),
  list: DS.belongsTo('list')
});

App.Card.FIXTURES = [
  {
    id: "3",
    description: "Fix bug with player",
    list: 2
  },
  {
    id: "4",
    description: "Add feature with D3",
    list: 2
  },
  {
    id: "5",
    description: "Learn EmberJS",
    list: 2
  }
];
