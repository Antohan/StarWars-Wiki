const routes = [
  {
    path: '/welcome',
    name: 'welcome',
    component: () => import('@/apps/core/pages/welcome-page.vue'),
    meta: {
      layout: 'default',
    },
  },
  {
    path: '*',
    name: 'error',
    component: () => import('@/apps/core/pages/404-page.vue'),
    meta: {
      layout: 'default',
    },
  },
];

export default routes;
