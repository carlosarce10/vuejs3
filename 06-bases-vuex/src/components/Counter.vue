<template>
  <h1>Counter - Vuex</h1>
  <h2>Direct access: {{ $store.state.count }}</h2>
  <h2>Computed: {{ countComputed }}</h2>
  <button @click="increment">+1</button>
  <button @click="incrementBy">+5</button>
  <button @click="randomInt" :disabled="isLoading">+random</button>

  <h1>mapState</h1>
  <h2>mapState: {{ count }}</h2>
  <h2>state renombrado: {{ counter }}</h2>

  <h2>Direct getter: {{ $store.getters.squareCount }}</h2>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {};
  },

  computed: {
    countComputed() {
      return this.$store.state.count;
    },
    ...mapState(['count', 'isLoading']),

    // renombrar variable del state
    ...mapState({
      counter: (state) => state.count,
    }),
  },
  methods: {
    increment() {
      this.$store.commit('increment');
    },
    incrementBy() {
      this.$store.commit('incrementBy', 5);
    },

    //...mapActions(['incrementRandom']),

    // renombrar action
    ...mapActions({
      randomInt: 'incrementRandom',
    }),
  },
};
</script>
