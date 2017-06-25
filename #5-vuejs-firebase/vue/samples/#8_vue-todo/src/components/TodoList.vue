<template lang="html">
  <section>
    <!-- <ul v-if="countItems"> -->
    <ul v-if="passedData">
      <li v-for="(todoItem, index) in passedData" :key="todoItem">
        <i class="checkBtn fa fa-check" aria-hidden="true"></i>
        {{ todoItem }}
        <span class="removeBtn" type="button" @click="removeTodo(todoItem, index)">
          <i class="fa fa-trash-o" aria-hidden="true"></i>
        </span>
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
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
</style>
