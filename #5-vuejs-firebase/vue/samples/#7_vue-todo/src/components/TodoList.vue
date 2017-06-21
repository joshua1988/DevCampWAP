<template lang="html">
  <section>
    <!-- <ul v-if="countItems"> -->
    <ul>
      <li v-for="todoItem in passedData">
        {{ todoItem }}
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
