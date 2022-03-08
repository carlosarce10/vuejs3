import { getHeroeById } from './bases/08-imp-exp';

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroeById(id);

      if (hero) {
        resolve(hero);
      } else {
        reject('No se encontró ningun heroe');
      }

      resolve(hero);
    });
  }, 1000);
};

getHeroeByIdAsync(9)
  .then((hero) => console.log(`El heroe es: ${hero.name}`))
  .catch((err) => console.log(err));
