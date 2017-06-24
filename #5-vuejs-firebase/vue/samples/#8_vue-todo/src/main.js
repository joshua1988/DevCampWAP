import Vue from 'vue'
import App from './App.vue'

// Component Registration
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})
