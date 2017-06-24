Vue.component('todo-item', {
  props: ['todo'],
  template: '<p>{{ todo.text }}</p>'
});

var app = new Vue({
  el: '#app',
  data: {
    Todos: [
      { id: 0, text: 'Learn Vue.js' },
      { id: 1, text: 'Learn Components' },
      { id: 2, text: 'Learn Props' },
      { id: 3, text: 'Learn For Loop' }
    ]
  }
});
