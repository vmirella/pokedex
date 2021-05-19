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
            <button class="btn-action" @click="showLoader">Get started</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      showLoader() {
        this.$store.state.showLoader = true;
        this.$router.push({ name: 'list'});
        const body = document.body;
        body.classList.add('no-scroll');
      }
    }
  }
</script>