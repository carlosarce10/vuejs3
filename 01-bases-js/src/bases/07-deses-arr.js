const characters = ['Goku', 'Vegeta', 'Trunks'];

const [g, v, t] = characters;

console.log(g, v, t);

const returnArray = ([letters, numbers]) => {
  return [letters, numbers];
};

const [a, b] = returnArray(['ads', 123]);

console.log(a, b);
