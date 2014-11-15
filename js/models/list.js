App.List = DS.Model.extend({
  listName: DS.attr('string'),
  cards: DS.hasMany('card', {
    async: true
  })
});

App.List.FIXTURES = [
  {
    id: "1",
    listName: "ToDo",
    cards: []
  },
  {
    id: "2",
    listName: "Doing",
    cards: ["3","4","5"]
  },
  {
    id: "3",
    listName: "Done",
    cards: []
  }
];
