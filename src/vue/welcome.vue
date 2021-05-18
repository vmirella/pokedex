<template>
  <div class="container-vertical-center">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 text-center">
          <div class="container-welcome">
            <div class="container-welcome__image">
              <img alt="Pikachu" src="../assets/img/base.png">
            </div>
            <h3 class="container-welcome__title">Welcome to Pokédex</h3>
            <p class="container-welcome__description">The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.</p>
            <router-link class="btn-action" :to="{name: 'list'}">Get started</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
    }
  }
</script>