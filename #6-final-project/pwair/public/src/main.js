import Vue from 'vue'
// Vue Router
import VueRouter from 'vue-router';
import { routes } from './routes';
// Vue Material
import VueMaterial from 'vue-material'
import App from './App.vue'
// Vue Resource
import VueResource from 'vue-resource';

Vue.use(VueRouter);
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

const router = new VueRouter({
  routes,
  // get rid of #
  mode: 'history'
});

// Event Bus
export const eventBus = new Vue();

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
