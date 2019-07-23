import Vue from 'vue';
import Router from 'vue-router';

import core from '@/app/core/routes';
import auth from '@/app/auth/routes';
import client from '@/app/client/routes';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...core,
    ...auth,
    ...client,
  ],
});
