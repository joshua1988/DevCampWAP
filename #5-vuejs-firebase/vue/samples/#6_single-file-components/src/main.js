import Vue from 'vue'
import App from './App.vue'
// Global Components
import NavHeader from './components/NavHeader.vue';

Vue.component('nav-header', NavHeader);

new Vue({
  el: '#app',
  render: h => h(App)
})
