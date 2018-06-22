import Vue from 'vue'
// Vue Router
import { router } from './router';
// Vue Material
import VueMaterial from 'vue-material'
import App from './App.vue'
// Vue Resource
import VueResource from 'vue-resource';

Vue.use(VueMaterial);
Vue.use(VueResource);

Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'red',
  warn: 'red',
  background: 'white',
  black: 'black',
  lblue: 'light-blue'
})

// Event Bus
export const eventBus = new Vue();

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
