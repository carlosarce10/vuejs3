const isAuth = (to, from, next) => {
  return new Promise(() => {
    const random = Math.random() * 100;

    if (random < 50) {
      console.log('Esta autenticado');
      next();
    } else {
      console.log('No tiene acceso');
      next({ name: 'pokemon-home' });
    }
  });
};

export default isAuth;
