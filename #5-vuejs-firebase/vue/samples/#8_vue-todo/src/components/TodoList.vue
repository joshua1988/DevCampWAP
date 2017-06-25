<template lang="html">
  <section>
    <!-- <ul v-if="countItems"> -->
    <ul v-if="passedData">
      <li v-for="(todoItem, index) in passedData" :key="todoItem">
        {{ todoItem }}
        <button type="button" @click="removeTodo(todoItem, index)">X</button>
      </li>
    </ul>

    <!-- Button Click Event & Shorthand -->
    <!-- <button type="button" v-on:click='getItems'>work</button> -->
    <!-- <button type="button" @click='getItems'>work</button> -->
  </section>
</template>

<script>
export default {
  props: ['passedData'],
  data () {
    return {
      flag: true
    }
  },
  methods: {
    removeTodo(todoItem, index) {
      this.$emit('removeTodo', todoItem, index);
    }
  }

  // computed: {
  //   countItems: function () {
  //     return Object.keys(localStorage).length;
  //   }
  // },
  // methods: {
  //   checkItems: function () {
  //     return flag = (this.countItems() > 0) ? true : false;
  //   },
  // },
  // created() {
  //   for (var key in localStorage) {
  //     this.todoItems.push(key);
  //   }
  // }
}
</script>

<style lang="css">
</style>
