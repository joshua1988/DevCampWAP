<template lang="html">
  <div>
    <input type="text" v-model="newTodoItem" placeholder="Type what you have to do">
    <button type="button" v-on:click='addTodo'>Add</button>
    <button type="button" @click="clearTodo">Clear All</button>
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
    },
    clearTodo() {
      this.$emit('clearLocalStorage');
    }
  }
}
</script>

<style lang="css">
</style>
