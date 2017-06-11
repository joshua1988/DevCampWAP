Vue.component('child-component', {
  props: ['passedData'],
  template: '<p>{{passedData}}</p>'
});

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue! from Parent Component',
  }
});
