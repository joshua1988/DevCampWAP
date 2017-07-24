<template lang="html">
  <section>
    <ul v-if="todoItems">
      <transition-group name="list" tag="p">
        <li v-for="(todoItem, index) in todoItems" :key="todoItem">
          <i class="checkBtn fa fa-check" aria-hidden="true"></i>
          {{ todoItem }}
          <span class="removeBtn" type="button" @click="removeTodo({todoItem, index})">
            <i class="fa fa-trash-o" aria-hidden="true"></i>
          </span>
        </li>
      </transition-group>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';

export default {
  methods: {
    // removeTodoItem(todoItem, index) {
    //   return this.$store.commit('removeTodoItem', {
    //     todoItem: todoItem,
    //     index: index
    //   });
    // }

    ...mapMutations({
      removeTodo: 'removeTodoItem'
    })
  },
  computed: {
    // todoItems() {
    //   return this.$store.getters.getTodoItems;
    // }

    ...mapGetters({
      todoItems: 'getTodoItems'
    })
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
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}

/* transition effect */
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active for <2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
