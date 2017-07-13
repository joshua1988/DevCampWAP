<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-bind:passedData="todoItems"></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  name: 'app',
  data () {
    return {
      todoItems: ['text']
    }
  },
  components: {
    TodoHeader: TodoHeader,
    TodoInput: TodoInput,
    TodoList: TodoList,
    TodoFooter: TodoFooter
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #62acde;
  font-family: 'Ubuntu', sans-serif;
}
</style>
