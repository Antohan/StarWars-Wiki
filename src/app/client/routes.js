const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/app/client/pages/home-page.vue'),
    meta: {
      layout: 'default',
    },
  },
];

export default routes;
