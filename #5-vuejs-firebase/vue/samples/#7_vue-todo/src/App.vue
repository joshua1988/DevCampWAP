<template>
  <div id="app">
    <!-- component naming #1 -->
    <TodoHeader></TodoHeader>
    <TodoInput v-bind:passed-data='todoItems'></TodoInput>
    <TodoList v-bind:passedData='todoItems'></TodoList>

    <!-- component naming #2 -->
    <!-- <todo-header></todo-header>
    <todo-input></todo-input>
    <todo-list></todo-list> -->
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'

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

  // Component Registration
  components: {
    // component naming #1
    TodoHeader: TodoHeader,
    TodoInput: TodoInput,
    TodoList: TodoList

    // component naming #2
    // 'todo-header' : TodoHeader,
    // 'todo-input' : TodoInput,
    // 'todo-list' : TodoList
  },
}
</script>

<style>
  body {
    text-align: center;
  }
  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
</style>
