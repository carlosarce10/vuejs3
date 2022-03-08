<template>
  <h1>
    Pokemon: <span>#{{ id }}</span>
  </h1>
  <div v-if="pokemon">
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      // id: null,
      pokemon: null,
    };
  },
  created() {
    /* console.log(this.$route);
    this.id = this.$route.params.id; */

    this.getPokemon();
  },
  methods: {
    async getPokemon() {
      try {
        console.log('entro');
        const pokemon = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${this.id}`
        ).then((response) => response.json());
        this.pokemon = pokemon;
      } catch (error) {
        this.$router.push('/');
        console.log('No existe el pokemon', error);
      }
    },
  },
  watch: {
    id() {
      this.getPokemon();
    },
  },
};
</script>
