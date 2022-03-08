import PokemonOptions from '@/components/PokemonOptions';
import { shallowMount } from '@vue/test-utils';
import { pokemons } from '../mocks/pokemos.mock';

describe('PokemonOptions component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons,
      },
    });
  });
  test('debe hacer match con el snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('debe mostrar las 4 opciones correctamente', () => {
    const pokemonList = wrapper.findAll('li');

    expect(pokemonList.length).toBe(4);
    expect(pokemonList[0].text()).toBe('bulbasaur');
    expect(pokemonList[1].text()).toBe('ivysaur');
    expect(pokemonList[2].text()).toBe('venusaur');
    expect(pokemonList[3].text()).toBe('charmander');
  });

  test('debe de emitir "selection" con sus respectivos parámetros al hacer click', () => {
    const [li1, li2, li3, li4] = wrapper.findAll('li');

    li1.trigger('click');
    li2.trigger('click');
    li3.trigger('click');
    li4.trigger('click');

    expect(wrapper.emitted('selection').length).toBe(4);
    expect(wrapper.emitted('selection')[0]).toEqual([1]);
    expect(wrapper.emitted('selection')[1]).toEqual([2]);
    expect(wrapper.emitted('selection')[2]).toEqual([3]);
    expect(wrapper.emitted('selection')[3]).toEqual([4]);
  });
});
