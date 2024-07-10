<template>
  <div id="app">
    <Navbar/>
  </div>
</template>

<script>
import Navbar from './components/views/Navbar.vue'
export default {
  name: 'App',
  components:{
    Navbar
  }
}
</script>

<style>
body {
  padding-top: 56px;
}
</style>
