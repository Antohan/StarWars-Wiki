import Vue from 'vue';
import Router from 'vue-router';

import auth from '@/apps/auth/routes';
import core from '@/apps/core/routes';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...core,
    ...auth,
  ],
});
