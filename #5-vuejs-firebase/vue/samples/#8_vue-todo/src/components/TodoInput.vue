<template lang="html">
  <div>
    <input type="text" v-model="newTodoItem" placeholder="Type what you have to do">
    <button type="button" v-on:click='addTodo'>Add</button>
  </div>
</template>

<script>
export default {
  props: ['passedData'],
  data () {
    return {
      newTodoItem: ''
    }
  },
  methods: {
    addTodo() {
      var value = this.newTodoItem && this.newTodoItem.trim();
      localStorage.setItem(value, value);
      this.passedData.push(value);
      this.newTodoItem = '';
    }
  }
}
</script>

<style lang="css">
</style>
