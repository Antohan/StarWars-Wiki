import Vue from 'vue';
import Router from 'vue-router';

import auth from '@/app/auth/routes';
import core from '@/app/core/routes';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...core,
    ...auth,
  ],
});
