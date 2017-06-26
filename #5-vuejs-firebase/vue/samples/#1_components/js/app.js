// Global Component
Vue.component('todo-item', {
  template: '<p>This is a child component</p>'
});

// Local Component
// var todoItem = {
//   template: '<p>This is a child component</p>'
// }

var app = new Vue({
  el: '#app',
  data: {
    message : 'This is a parent component'
  },
  // Local Component
  // components: {
  //   'todo-item' : todoItem
  // }
});
