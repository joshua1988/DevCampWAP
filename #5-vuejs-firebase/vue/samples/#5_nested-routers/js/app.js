var Login = {
  template: `
    <div>
      Login Section
      <router-view></router-view>
    </div>
  `,
};
var LoginForm = {
  template: `
    <form action="/" method="post">
      <div>
          <label for="account">E-mail : </label>
          <input type="email" id="account">
      </div>
      <div>
          <label for="password">Password : </label>
          <input type="password" id="password">
      </div>
    </form>
  `,
};
var List = {
  template: `
    <div>
      List Section
      <router-view></router-view>
    </div>
  `,
};
var ListItems = {
  template: `
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  `,
};

var btns = {
  template: `
    <div>
      btn Section
      <router-view></router-view>
    </div>
  `,
};
var btnItems = {
  template: `
    <div>
      <button>1</button>
      <button>2</button>
      <button>3</button>
    </div>
  `,
};

// 할일 #2
// Main 컴포넌트와 그 하위 컴포넌트를 아래 등록해보세요.

var routes = [
  {
    path: '/login',
    component: Login,
    children: [
      { path: '', component: LoginForm }
    ]
  },
  {
    path: '/list',
    component: List,
    children: [
      { path: '', component: ListItems }
    ]
  },
  {
    path: '/btns',
    component: btns,
    children: [
      { path: '', component: btnItems }
    ]
  },
  // 할일 #1
  // `/main` URL 에서 동작할 라우터를 하나 등록하고,
  // 해당 라우터에서 동작할 Main 컴포넌트와 하위 컴포넌트를 생성하여 등록합니다.
];

var router = new VueRouter({
  routes
});

var app = new Vue({
  router
}).$mount('#app');
