<template>
  <div id="app">
    <list-cmp></list-cmp>
    
  </div>
</template>

<script>
import listCmp from './components/Home.vue';

export default {
  name: 'app',
  components:{
    'list-cmp':listCmp
  }
}
</script>

<style>
</style>