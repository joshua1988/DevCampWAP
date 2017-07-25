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
  // },

  // 실습 #2 - `todo-footer` 컴포넌트 지역 등록
  // <p>This is another child component</p> 를 template 으로 갖는 컴포넌트를 등록해보세요.
});

// 실습 #1 - `todo-footer` 컴포넌트 전역 등록
// <p>This is another child component</p> 를 template 으로 갖는 컴포넌트를 등록해보세요.
