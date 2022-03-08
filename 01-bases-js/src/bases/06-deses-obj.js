// desestructuración de objetos

const person = {
  nom: 'Carlos',
  age: 23,
  codeName: 'Carlosarce',
};

const createPerson = ({ nom, age, codeName, weight }) => ({
  id: 8414321,
  nom,
  age,
  codeName,
  weight,
});

console.log(createPerson(person));
