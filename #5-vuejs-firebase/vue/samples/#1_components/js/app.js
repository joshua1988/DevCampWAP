Vue.component('todo-item', {
  template: '<p>This is a child component</p>'
});

var app = new Vue({
  el: '#app',
  data: {
    message : 'This is a parent component'
  }
});
