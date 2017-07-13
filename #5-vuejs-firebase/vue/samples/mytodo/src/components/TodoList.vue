<template lang="html">
  <section>
    <ul v-if="todoItems">
      <li v-for="(todoItem, index) in todoItems" :key="todoItem">
        {{ todoItem }}
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fa fa-trash-o"></i>
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data () {
    return {
      todoItems: []
    }
  },
  created() {
    for (var key in localStorage) {
      this.todoItems.push(key);
    }
  },
  methods: {
    removeTodo(todoItem, index) {
      console.log(todoItem);
      console.log(index);
      localStorage.removeItem(todoItem);
    }
  },
  watch: {
     todoItems: {
       handler: function (todo) {
         console.log("changed");
       }
     }
  }
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
.removeBtn {
  color: #de4343;
  margin-left: auto;
}
</style>
