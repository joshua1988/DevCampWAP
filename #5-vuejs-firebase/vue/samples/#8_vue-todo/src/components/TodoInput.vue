<template lang="html">
  <div class="inputBox">
    <input type="text" v-model="newTodoItem" placeholder="Type what you have to do">
    <span class="addContainer" v-on:click="addTodo"><i class="addBtn fa fa-plus" aria-hidden="true"></i></span>
    <!-- <button type="button" @click="clearTodo">Clear All</button> -->
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
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: #fbcb44;
  display: inline-block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>
