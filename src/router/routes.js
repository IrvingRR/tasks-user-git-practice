import RootLayout from '@/layouts/RootLayout.vue';

export const routes = [
    {
      path: '/',
      name: 'home',
      meta: {
        layout: RootLayout,
      }
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        layout: RootLayout,
      }
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      meta: {
        layout: RootLayout,
      }
      // component: () => import('../views/AboutView.vue')
    }
];