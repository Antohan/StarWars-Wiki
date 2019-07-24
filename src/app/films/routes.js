const routes = [
  {
    path: '/films',
    name: 'films',
    component: () => import('@/app/films/pages/films-page.vue'),
    meta: {
      layout: 'default',
    },
  },
];

export default routes;
