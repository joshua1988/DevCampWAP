var localStorageItems = {
  fetch: function () {
    var items = [];
    for (var key in localStorage) {
      items.push(key);
    }
    return items;
  }
}

const state = {
  todoItems: localStorageItems.fetch()
};
