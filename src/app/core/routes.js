import App from '@/App';

const routes = [
  {
    path: '/',
    redirect: 'welcome',
    component: App,
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */'@/app/core/pages/home-page.vue'),
    meta: {
      layout: 'default',
    },
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: () => import(/* webpackChunkName: "welcome" */'@/app/core/pages/welcome-page.vue'),
    meta: {
      layout: 'default',
    },
  },
  {
    path: '*',
    name: 'error',
    component: () => import(/* webpackChunkName: "404" */'@/app/core/pages/404-page.vue'),
    meta: {
      layout: 'default',
    },
  },
];

export default routes;
