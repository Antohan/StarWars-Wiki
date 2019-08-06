const routes = [
  {
    path: '/films',
    name: 'films',
    component: () => import(/* webpackChunkName: "films" */'@/app/films/pages/films-page.vue'),
    meta: {
      layout: 'default',
    },
  },
];

export default routes;
