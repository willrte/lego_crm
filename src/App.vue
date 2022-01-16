<template>
  <div class="app">
    <div class="menu">
      <Menu/>
    </div>
    <div class="page">
      <router-view v-slot="{ Component }"></router-view>
    </div>
  </div>

</template>

<script>
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>
<style>
html, body {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  font-family: Poppins;
}
.app{
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
}
.page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;

}


</style>
