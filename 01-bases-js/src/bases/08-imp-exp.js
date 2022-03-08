//import { owners } from './data/heroes';
import superHeroes from '../data/heroes';

// getHeroeById (id)
export const getHeroeById = (id) =>
  superHeroes.find((heroe) => heroe.id === id);

// getHeroeByOwner (Dc or Marvel)
export const getHeroeByOwner = (owner) =>
  superHeroes.filter((heroe) => heroe.owner === owner);
