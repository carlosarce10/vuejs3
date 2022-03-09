import { createRouter, createWebHashHistory } from 'vue-router';
import isAuth from './auth-guard';

const routes = [
  {
    path: '/',
    redirect: 'pokemon',
  },
  {
    path: '/pokemon',
    name: 'pokemon',
    component: () => import('@/modules/pokemon/layouts/PokemonLayout'),
    children: [
      {
        path: 'home',
        name: 'pokemon-home',
        component: () => import('@/modules/pokemon/pages/ListPage'),
      },
      {
        path: 'about',
        name: 'pokemon-about',
        component: () => import('@/modules/pokemon/pages/AboutPage'),
      },
      {
        path: 'pokemonid/:id',
        name: 'pokemon-id',
        component: () => import('@/modules/pokemon/pages/PokemonPage'),
        props: (route) => {
          const id = Number(route.params.id);
          return isNaN(id) ? { id: 1 } : { id };
        },
      },
      {
        path: '',
        redirect: { name: 'pokemon-about' },
      },
    ],
  },
  {
    path: '/dbz',
    name: 'dbz',
    component: () => import('@/modules/dbz/layouts/DragonBallLayout'),
    beforeEnter: [isAuth],
    children: [
      {
        path: 'characters',
        name: 'dbz-characters',
        component: () => import('@/modules/dbz/pages/Characters'),
      },
      {
        path: 'about',
        name: 'dbz-about',
        component: () => import('@/modules/dbz/pages/About'),
      },
      {
        path: '',
        redirect: { name: 'dbz-characters' },
      },
    ],
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

// Guard síncrono
/* router.beforeEach((to, from, next) => {
  const random = Math.random() * 100;
  if (random < 50) {
    console.log('Autenticado');
    next();
  } else {
    console.log('No tienes autorización para acceder a esta ruta');
    next({ name: 'pokemon-home' });
  }
}); */

// Guard Sincrono
/* const canAcess = () => {
  return new Promise((resolve) => {
    const random = Math.random() * 100;

    if (random < 50) {
      console.log('Autenticado - canAcess');
      resolve(true);
    } else {
      console.log('Bloqueado - canAcess');
      resolve(false);
    }
  });
};

router.beforeEach(async (to, from, next) => {
  const authorized = await canAcess();
  authorized ? next() : next({ name: 'pokemon-home' });
}); */

export default router;
