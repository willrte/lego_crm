<template>
  <div class="app">
    <div class="menu">
      <Menu/>
    </div>
    <div class="pageActive">
      <router-view v-slot="{ Component }"></router-view>
    </div>
  </div>

</template>

<script>
import Menu from './components/Menu.vue';
import Version from './components/Version.vue';
export default {
  name: 'App',
  data(){
    return {
    }
  },
  components: {
    Menu,
    Version,
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
  color: white;
  background: rgba(8, 8, 16, 0.81);
}
.pageActive {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;

}


</style>
