<template>
  <Menu id="menu_gch"></Menu>
  <div class="page">
    <router-view v-slot="{ Component }"></router-view>
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
.page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;

}
#menu_gch{
  position: absolute;
}
</style>
