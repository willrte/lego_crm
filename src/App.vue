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
}
.app{

  display: flex;
  flex-direction: row;
}
.page {
  width: available;
  height: available;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;

}


</style>
