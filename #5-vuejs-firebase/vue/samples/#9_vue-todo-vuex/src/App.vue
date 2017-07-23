<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
// Component Registration
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  // created() {
  //   for (var key in localStorage) {
  //     this.todoItems.push(key);
  //   }
  // },
  // methods: {
  //   clearLocalStorage() {
  //     localStorage.clear();
  //     this.todoItems = [];
  //   },
  //   removeTodo(item, index) {
  //     this.todoItems.splice(index, 1);
  //     localStorage.removeItem(item);
  //   }
  // },

  // Component Registration
  components: {
    // component naming #1
    TodoHeader: TodoHeader,
    TodoInput: TodoInput,
    TodoList: TodoList,
    TodoFooter: TodoFooter

    // component naming #2
    // 'todo-header' : TodoHeader,
    // 'todo-input' : TodoInput,
    // 'todo-list' : TodoList,
    // 'todo-footer' : TodoFooter
  },
}
</script>

<style>
  body {
    text-align: center;
    background-color: #62acde;
    font-family: 'Ubuntu', sans-serif;
  }
  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
</style>
