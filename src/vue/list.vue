<template>
  <div  class="container-top-center">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 text-center">
          <div class="container-list">
            <div class="container-list__content">
              <div class="search">
                <i class="fa fa-search search__icon-search"></i>
                <input class="search__input-search" placeholder="Search"/>
              </div>
              <div class="container-empty" v-if="pokemons.length < 1">
                <h2 class="container-empty__title">Uh-oh!</h2>
                <p class="container-empty__description">You look lost on your journey!</p>
                <router-link class="btn-action" :to="{name: 'welcome'}">Go back home</router-link>
              </div>

              <ul class="container-list__list-group" v-else>
                <li class="container-list__list-group-item" v-for="(pokemon, index) in pokemons" :key="index">
                  <h4 class="m-0">{{pokemon.name}}</h4>
                  <div class="star" :class="{'star-active': pokemon.isFavorite}" @click="updateStatePokemon(pokemon.name)">
                    <i class="fa fa-star"></i>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-list__actions fixed-bottom">
      <div class="container-list__actions-justify">
        <button class="btn-action">
          <i class="fa fa-list btn-action__icon"></i>
          All
        </button>
        <button class="btn-action btn-disabled">
          <i class="fa fa-star btn-action__icon"></i>
          Favorites
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.init();
    },
    methods: {
      init() {
        const api = 'https://pokeapi.co/api/v2/pokemon/';

        this.fetchAsync(api).then((response) => {
          const data = response.results;
          this.pokemons = data.map((pokemon) => {
            return {
              name: pokemon.name,
              url: pokemon.url,
              isFavorite: false
            }
          });
          this.$store.state.pokemons = this.pokemons;
        });
      },
      async fetchAsync (url) {
        let response = await fetch(url);
        let data = await response.json();
        return data;
      },
      updateStatePokemon(name) {
        this.$store.commit('updateStatePokemon', name);
        this.pokemons = this.$store.state.pokemons;
      }
    },
    data() {
      return {
        pokemons: []
      }
    }
  }
</script>