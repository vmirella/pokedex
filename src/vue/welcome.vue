<template>
  <div class="container-vertical-center">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 text-center">
          <div class="container-welcome">
            <img alt="Pikachu" src="../assets/pikachu.png">
            <h3>Welcome to Pokédex</h3>
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