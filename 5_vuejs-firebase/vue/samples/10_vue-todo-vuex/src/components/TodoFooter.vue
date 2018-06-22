<template lang="html">
  <transition name="fade">
    <div v-if="todoCounts" class="clearAllContainer">
      <span class="clearAllBtn" @click="clearTodo">Clear All</span>
    </div>
  </transition>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  methods: {
    // clearTodo() {
    //   return this.$store.commit('removeAllTodoItems');
    // }

    ...mapMutations({
      clearTodo: 'removeAllTodoItems'
    })
  },
  computed: {
    todoCounts() {
      return this.$store.getters.getTodoItems.length > 0 ? true : false;
    }
  }
}
</script>

<style scoped>
.clearAllContainer {
	width: 8.5rem;
	height: 50px;
	line-height: 50px;
	background-color: white;
	border-radius: 5px;
	margin: 0 auto;
}
.clearAllBtn {
	color: #e20303;
	/* 추가 */
	display: block;
}
</style>
