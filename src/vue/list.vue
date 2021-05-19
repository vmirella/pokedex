<template>
  <div  class="container-top-center">
    <div class="container-dialog" v-if="showDialog" @click="showDialog = false">
      <div class="dialog" v-on:click.stop>
        <div class="dialog__container-image">
          <img class="dialog__image" alt="Pikachu" :src="details.image">
          <i class="fa fa-times-circle dialog__close" @click="showDialog = false"></i>
        </div>
        <div class="dialog__body">
          <ul class="dialog__list">
            <li class="dialog__item-list">
              <h5>Name: {{details.name}}</h5>
            </li>
            <li class="dialog__item-list">
              <h5>Weight: {{details.weight}}</h5>
            </li>
            <li class="dialog__item-list">
              <h5>Height: {{details.height}}</h5>
            </li>
            <li class="dialog__item-list">
              <h5>Types: {{details.types}}</h5>
            </li>
          </ul>
          <div class="dialog__actions">
            <button class="btn-action" @click="shareDataPokemon">Share to my friends</button>
            <div class="star" :class="{'star-active': details.isFavorite}" @click="updateStatePokemon(details.name)">
              <i class="fa fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

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
                <li class="container-list__list-group-item" v-for="(pokemon, index) in pokemons" :key="index" @click="showDetail(pokemon)">
                  <h4 class="m-0">{{pokemon.name}}</h4>
                  <div class="star" :class="{'star-active': pokemon.isFavorite}" @click="updateStatePokemon(pokemon.name)" v-on:click.stop>
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
  import dgsnackbar from 'dgsnackbar';

  export default {
    mounted() {
      this.init();
    },
    methods: {
      init() {
        const api = 'https://pokeapi.co/api/v2/pokemon/';

        this.fetchData(api).then((response) => {
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
      async fetchData (url) {
        let response = await fetch(url);
        let data = await response.json();
        return data;
      },
      updateStatePokemon(name) {
        this.$store.commit('updateStatePokemon', name);
        this.pokemons = this.$store.state.pokemons;
        this.details.isFavorite = !this.details.isFavorite;
      },
      showDetail(details) {
        const api = `https://pokeapi.co/api/v2/pokemon/${details.name}`;

        this.fetchData(api).then((response) => {
          let types = response.types;
          let typesText = '';
          for (let i = 0; i < types.length; i++) {
            typesText += types[i].type.name + ',';
          }
          typesText = typesText.slice(0, -1);

          this.details = {
            name: details.name,
            weight: response.weight,
            height: response.height,
            types: typesText,
            image: response.sprites.front_default,
            isFavorite: details.isFavorite
          }

          this.showDialog = true;
        });
      },
      shareDataPokemon() {
        const text = this.getDetailPokemonText();
        this.copyToClipboard(text);
        dgsnackbar({
          message: 'Copied to clipboard successfully',
          type: 'success'
        })
      },
      getDetailPokemonText() {
        let text = '';
        text += `🚨 DETAIL POKEMÓN 🚨 \n`;

        text += `✔️ Name: ${this.details.name} \n`;
        text += `✔️ Weight: ${this.details.weight} \n`;
        text += `✔️ Height: ${this.details.height} \n`;
        text += `✔️ Types: ${this.details.types} \n`;
        text += `✔️ Image: ${this.details.image} \n`;
        return text;
      },
      copyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      },
    },
    data() {
      return {
        pokemons: [],
        showDialog: false,
        details: {}
      }
    }
  }
</script>