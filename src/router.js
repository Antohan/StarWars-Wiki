import Vue from 'vue';
import Router from 'vue-router';

import core from '@/app/core/routes';
import auth from '@/app/auth/routes';
import films from '@/app/films/routes';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...core,
    ...auth,
    ...films,
  ],
});
