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
                <li class="container-list__list-group-item">
                  <h4 class="m-0">Bulbasaur</h4>
                  <div class="star">
                    <i class="fa fa-star"></i>
                  </div>
                </li>
                <li class="container-list__list-group-item">
                  <h4 class="m-0">Charmander</h4>
                  <div class="star star-active">
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
    data() {
      return {
        pokemons: [
          {
            name: 'Squirtle',
            weigth: 20,
            height: 18,
            types: ['Normal', 'Water']
          }
        ]
      }
    }
  }
</script>