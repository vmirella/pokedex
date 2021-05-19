import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    pokemons: []
  },
  mutations: {
    updateStatePokemon (state, name) {
      state.pokemons.forEach((element) => {
        if (element.name === name) {
          element.isFavorite = !element.isFavorite;
          return;
        }
      });
    },
  },
})

export default store;