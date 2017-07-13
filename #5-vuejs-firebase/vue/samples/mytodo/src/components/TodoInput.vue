<template lang="html">
  <div>
    <input type="text" v-model="newTodoItem">
    <span class="addContainer" v-on:click="addTodo">
      <i class="addBtn fa fa-plus"></i>
    </span>
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
      // console.log(this);
      // console.log();

      if (this.newTodoItem !== '') {
        var value = this.newTodoItem && this.newTodoItem.trim();
        localStorage.setItem(this.newTodoItem, this.newTodoItem);
        this.passedData.push(this.newTodoItem);
      } else {
        alert("type sth");
      }
    }
  }
}
</script>

<style lang="css">
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
