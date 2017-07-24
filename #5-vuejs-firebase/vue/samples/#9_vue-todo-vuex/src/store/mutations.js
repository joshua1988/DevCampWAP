export const addTodoItem = function (state, todoItem) {
  localStorage.setItem(todoItem, todoItem);
  return state.todoItems.push(todoItem);
};

export const removeTodoItem = function (state, payload) {
  localStorage.removeItem(payload.todoItem);
  return state.todoItems.splice(payload.index, 1);
};

export const removeAllTodoItems = function (state) {
  localStorage.clear();
  return state.todoItems = [];
};
