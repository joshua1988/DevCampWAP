import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todoItems: []
  },
  getters: {
    getTodoItems(state) {
      return state.todoItems;
    }
  },
  mutations: {
    addTodoItem(state, todoItem) {
      return state.todoItems.push(todoItem);
    },
    removeTodoItem(state, payload) {
      return state.todoItems.splice(payload.index, 1);
    },
    removeAllTodoItems(state) {
      return state.todoItems = [];
    }
  }
});
