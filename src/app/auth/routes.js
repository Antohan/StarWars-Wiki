const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */'@/app/auth/pages/login-page.vue'),
    meta: {
      layout: 'auth-layout',
    },
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import(/* webpackChunkName: "registration" */'@/app/auth/pages/registration-page.vue'),
    meta: {
      layout: 'auth-layout',
    },
  },
];

export default routes;
