import { createStore } from 'vuex';
import getRandomInt from '@/helpers/getRandomInt';

export default createStore({
  state: {
    count: 1,
    isLoading: false,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    incrementBy(state, val) {
      state.count += val;
    },
    setLoading(state, val) {
      state.isLoading = val;
    },
  },
  actions: {
    async incrementRandom({ commit }) {
      commit('setLoading', true);
      const randomInt = await getRandomInt();
      commit('incrementBy', randomInt);
      commit('setLoading', false);
    },
  },
  getters: {
    squareCount(state) {
      return state.count * state.count;
    },
  },
});
