<template>
    <div>
      <input type="text" name="" id="" v-model="inputValue">
      <ul>
          <li v-for="item in items">{{item}}</li>
      </ul>
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            inputValue:'',
            items:['a','b','c']
        }
    }
}
</script>

<style>

</style>
