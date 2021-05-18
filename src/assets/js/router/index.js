import Vue from 'vue';
import VueRouter from 'vue-router';

import Welcome from '../../../vue/welcome';
import List from '../../../vue/list';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/lista',
      name: 'list',
      component: List
    }
  ]
});

export default router;