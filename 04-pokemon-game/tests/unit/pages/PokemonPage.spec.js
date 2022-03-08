import PokemonPage from '@/pages/PokemonPage';
import { shallowMount, mount } from '@vue/test-utils';
import { pokemons } from '../mocks/pokemos.mock';

describe('PokemonPage component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonPage);
  });

  test('debe de llamar mixPokemonArray al montar', () => {
    const mixPokemonArray = jest.spyOn(PokemonPage.methods, 'mixPokemonArray');
    wrapper = shallowMount(PokemonPage);

    expect(mixPokemonArray).toHaveBeenCalled();
  });

  test('debe de hacer match con el snapshot cuando carga los pokemos', () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: '',
        };
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test('debe de mostrar los componentes de PokemonPicture y PokemonOptions', () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: '',
        };
      },
    });

    const picture = wrapper.find('[data-testid="pokemonPicture"]');
    const options = wrapper.find('[data-testid="pokemonOptions"]');

    expect(picture.exists()).toBeTruthy();
    expect(options.exists()).toBeTruthy();

    expect(picture.attributes('pokemonid')).toBe('1');
    expect(options.attributes('pokemons')).toBeTruthy();
  });

  test('pruebas con checkAnswer', async () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: '',
        };
      },
    });
    await wrapper.vm.checkAnswer(1);

    expect(wrapper.find('h2').exists()).toBeTruthy();
    expect(wrapper.vm.showPokemon).toBe(true);
    expect(wrapper.find('h2').text()).toBe('Andas duro, kbron');

    await wrapper.vm.checkAnswer(10);
    expect(wrapper.vm.message).toBe(
      `No le sabes, el pokemon es ${pokemons[0].name}`
    );
  });
});
