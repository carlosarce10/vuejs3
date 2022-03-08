const heros = [
  {
    id: 1,
    name: 'Batman',
  },
  {
    id: 2,
    name: 'Superman',
  },
];

// some regresa un booleano si encuentra la condicion o no
const existe = heros.some((hero) => hero.id === 3);

// find regresa el objeto si cumnple la condicion
//const existe = heros.find((hero) => hero.id === 3);

console.log(existe);
