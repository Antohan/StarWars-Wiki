import Vue from 'vue';
import Router from 'vue-router';

import App from './App';

import auth from '@/apps/auth/routes';
import core from '@/apps/core/routes';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: 'welcome',
      name: 'home',
      component: App,
    },
    ...core,
    ...auth,
  ],
});
