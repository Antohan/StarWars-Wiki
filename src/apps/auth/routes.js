const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/apps/auth/pages/login-page.vue'),
    meta: {
      layout: 'auth-layout',
    },
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('@/apps/auth/pages/registration-page.vue'),
    meta: {
      layout: 'auth-layout',
    },
  },
];

export default routes;
