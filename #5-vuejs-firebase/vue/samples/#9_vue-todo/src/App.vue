<template>
  <div id="app">
    <!-- component naming #1 -->
    <TodoHeader></TodoHeader>
    <TodoInput v-bind:passed-data="todoItems"></TodoInput>
    <TodoList v-bind:passedData="todoItems" v-on:removeTodo="removeTodo"></TodoList>
    <TodoFooter v-bind:passedData="todoItems" @clearLocalStorage="clearLocalStorage"></TodoFooter>

    <!-- component naming #2 -->
    <!-- <todo-header></todo-header>
    <todo-input></todo-input>
    <todo-list></todo-list>
    <todo-footer></todo-footer> -->
  </div>
</template>

<script>
// Component Registration
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data () {
    return {
      todoItems: []
    }
  },
  watch: {
    todoItems: {
      handler: function (todo) {
        console.log("changed");
      }
    }
  },
  created() {
    for (var key in localStorage) {
      this.todoItems.push(key);
    }
  },
  methods: {
    clearLocalStorage() {
      localStorage.clear();
      this.todoItems = [];
    },
    removeTodo(item, index) {
      this.todoItems.splice(index, 1);
      localStorage.removeItem(item);
    }
  },

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
