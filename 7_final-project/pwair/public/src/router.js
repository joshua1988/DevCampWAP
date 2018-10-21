import Vue from 'vue'
import VueRouter from 'vue-router';

// Router Components
import Login from '@/components/login/Login.vue';
import Body from '@/components/main/Body.vue';
import Statistic from '@/components/main/Statistic.vue';
import InfoSummary from '@/components/main/InfoSummary.vue';
import Header from '@/components/common/Header.vue';

Vue.use(VueRouter);

const routes = [
  { path : '/', component: Login },
  {
    path : '/home',
    // Named Router
    components: {
      nestedHeader: Header,
      default: Body,
      summaryView: InfoSummary
    },
    meta: { authRequired: true }
  },
  {
    path : '/logs',
    components: {
      nestedHeader: Header,
      default: Statistic
    },
    meta: { authRequired: true }
  }
]

export const router = new VueRouter({
  routes,
  // get rid of #
  mode: 'history'
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(m => m.meta.authRequired)) {
//     alert('auth needed');
//     next({ path: '/' });
//   } else {
//     next();
//   }
// });
