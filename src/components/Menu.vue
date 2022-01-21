<template>
  <div class="menu-container">

    <div class="menu">
      <div class="menu-btn" :class="{active: $route.name=== 'Home'}" @click="$router.push('/');">
        <i class="fas fa-grip-horizontal" style="font-size: 25px"></i>
        &nbsp;&nbsp;
        <div>Home</div>
      </div>

      <div class="menu-btn" :class="{active: $route.name=== 'Clients'}" @click="$router.push('/clients');">
        <i class="fas fa-users" style="font-size: 25px"></i>
        &nbsp;&nbsp;
        <div>Clients</div>
      </div>
      <div class="menu-btn" :class="{active: $route.name=== 'Ventes'}" @click="$router.push('/ventes');">
        <i class="fas fa-file-signature" style="font-size: 25px"></i>
        &nbsp;&nbsp;
        <div>Ventes</div>
      </div>
    </div>
    <Version style="margin-bottom:1rem " />
  </div>

</template>

<script>
import Version from "@/components/Version";

export default {
  name: 'Menu',
  data() {
    return {};
  },
  components: {
    Version
  },
  methods: {},
}

</script>


<style scoped>
/*.highlight{*/
/*  position: absolute;*/
/*  bottom: 33.5rem;*/
/*  width: 8rem;*/
/*  height: 8rem;*/
/*  background-color: #e89797;*/
/*  margin: 0.5rem;*/
/*  transition: all 0.4s ease-in-out;*/
/*  border-radius: 100px;*/
/*  z-index: -1;*/
/*  border: #e89797 solid 1px;*/
/*}*/
.menu-container {
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: max-content;
  align-items: center;
  justify-content: center;

}

.menu {
  display: flex;
  flex-direction: column;
  /*background-color: #c0c0c0;*/
  font-family: Arial;
  height: max-content;
  width: max-content;
  border-radius: 100px;
  z-index: 9;
  margin: auto 0;


}

.menu-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 2.5rem;
  max-height: max-content;
  min-width: max-content;
  cursor: pointer;
  border-radius: 0.5rem;
  margin: 0.2rem 1rem;
  padding: 0 1rem;
  border: transparent solid 2px;
  font-weight: bold;

}

.menu-btn:hover {
  /*color: #ffffff;*/
  font-weight: bold;
  border: white solid 2px;
  transition-duration: 0.3s;
}

.active {
  color: #ffffff;
  font-weight: bold;
  transition-duration: 0.3s;
  border: red solid 2px;

}
</style>
