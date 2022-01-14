<template>
  <div class="menu-container">
  <div class="menu">
    <div class="menu-link" style="cursor: pointer" @click="$router.push('/')">Home</div><br>
    <div class="menu-link" style="cursor: pointer" @click="$router.push('/clients')">Clients</div><br>
    <div class="menu-link" style="cursor: pointer" @click="$router.push('/about')">About</div><br>
  </div>
  </div>

</template>

<script>
export default {
  name: 'Menu',
}
</script>


<style scoped>
.menu-container{
  margin-left: 2rem;
  display: flex;
  height: 100%;
  width: 5rem;
  align-items: center;
  justify-content: center;
}
.menu{
  display: flex;
  flex-direction: column;
  color: #000000;
  background-color: #c0c0c0;
  justify-content: center;
  align-items: center;
  font-family: Arial;
  height: 15rem;
  width: 5rem;
  border-radius: 10px;

}
.menu-link{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem !important;
  width: 5rem !important;
  border-radius: 10px;
}
.menu-link:hover{
  color: #ffffff;
  font-weight: bold;
  background-color: #858585;
  transition-duration: 0.6s;
}
</style>
