<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>¿Qué pokemon es?</h1>
    <PokemonPicture
      data-testid="pokemonPicture"
      :pokemonId="pokemon.id"
      :showPokemon="showPokemon"
    />
    <PokemonOptions
      data-testid="pokemonOptions"
      :pokemons="pokemonArr"
      @selection="checkAnswer"
    />

    <template class="fade-in" v-if="showAnswer">
      <h2>{{ message }}</h2>
      <button @click="newGame">Nuevo juego</button>
    </template>
  </div>
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions.vue';
import PokemonPicture from '@/components/PokemonPicture.vue';
import getPokemonOptions from '@/helpers/getPokemonOptions.js';

export default {
  components: {
    PokemonOptions,
    PokemonPicture,
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: '',
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();

      const rndId = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[rndId];
    },
    checkAnswer(pokemonId) {
      this.showPokemon = true;
      this.showAnswer = true;

      pokemonId == this.pokemon.id
        ? (this.message = 'Correcto')
        : (this.message = `Fallaste, el pokemon es ${this.pokemon.name}`);
    },
    newGame() {
      this.mixPokemonArray();
      this.showPokemon = false;
      this.showAnswer = false;
      this.pokemonArr = [];
      this.pokemon = null;
    },
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>

<style></style>
