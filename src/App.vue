<template>
  <div id="app">
    <loader/>
    <router-view/>
  </div>
</template>

<script>
require('../src/scss/index.scss');
import Loader from './vue/loader';

export default {
  name: 'App',
  components: {
    Loader
  }
}
</script>
