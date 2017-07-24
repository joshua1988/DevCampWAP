import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var localStorageItems = {
  fetch: function () {
    var items = [];
    for (var key in localStorage) {
      items.push(key);
    }
    return items;
  }
}

export const store = new Vuex.Store({
  state: {
    todoItems: localStorageItems.fetch()
  },
  getters: {
    getTodoItems(state) {
      return state.todoItems;
    }
  },
  mutations: {
    addTodoItem(state, todoItem) {
      localStorage.setItem(todoItem, todoItem);
      return state.todoItems.push(todoItem);
    },
    removeTodoItem(state, payload) {
      localStorage.removeItem(payload.todoItem);
      return state.todoItems.splice(payload.index, 1);
    },
    removeAllTodoItems(state) {
      localStorage.clear();
      return state.todoItems = [];
    }
  }
});
