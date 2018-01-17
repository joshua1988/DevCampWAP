const localStorageItems = {
  fetch() {
    const items = [];
		if (localStorage.length > 0) {
			for (let i = 0; i < localStorage.length; i++) {
				items.push(localStorage.key(i));
			}
		}
    return items;
  }
};

const state = {
  todoItems: localStorageItems.fetch()
};
