angular.module("app").factory("listFactory", function () {
  let service = {};
  let lists = [
    {
      id: 'list_1',
      listName: "Todo",
    },
    {
      id: 'list_2',
      listName: "Doing",
    },
    {
      id: 'list_3',
      listName: "Done",
    },
  ];

  service.getLists = () => {
    return lists;
  };
  service.addList = (listName) => {
    lists.push({
      id: _.uniqueId("list_"),
      listName: listName,
    });
  };
  service.removeList = (list) => {
    return _.pull(lists, list);
  };

  return service;
});
