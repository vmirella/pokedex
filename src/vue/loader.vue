<template>
  <div class="container-loader" v-if="showLoader">
    <div class="container-loader__container-pokeball">
      <div class="container-loader__pokeball"></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    showLoader() {
      return this.$store.state.showLoader;
    }
  }
}
</script>