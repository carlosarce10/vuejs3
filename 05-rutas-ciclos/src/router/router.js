import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/modules/pokemon/pages/ListPage'),
  },
  {
    path: '/about',
    component: () => import('@/modules/pokemon/pages/AboutPage'),
  },
  {
    path: '/:id',
    name: 'pokemon-id',
    component: () => import('@/modules/pokemon/pages/PokemonPage'),
    props: (route) => {
      const id = Number(route.params.id);
      return isNaN(id) ? { id: 1 } : { id };
    },
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/modules/shared/pages/NoPageFound'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
