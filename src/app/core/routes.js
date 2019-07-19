import App from '@/App';

const routes = [
  {
    path: '/',
    redirect: 'welcome',
    name: 'home',
    component: App,
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: () => import('@/app/core/pages/welcome-page.vue'),
    meta: {
      layout: 'default',
    },
  },
  {
    path: '*',
    name: 'error',
    component: () => import('@/app/core/pages/404-page.vue'),
    meta: {
      layout: 'default',
    },
  },
];

export default routes;
