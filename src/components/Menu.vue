<template>
  <div class="menu-container">
  <div class="menu">
    <div class="highlight"></div>
    <div style="display: flex; align-items: center" class="menu-btn"  :class="{active: menuItem=== 'Home'}" @click="$router.push('/'); setMenuItem('Home'); setHighlightPosition()">
      <i class="fas fa-grip-horizontal" style="font-size: 25px"></i>
      &nbsp;&nbsp;
      <div>Home</div>
    </div>

    <div class="menu-btn"  :class="{active: menuItem=== 'Clients'}" @click="$router.push('/clients'); setMenuItem('Clients');setHighlightPosition()">
      <i class="fas fa-users" style="font-size: 25px"></i>
      &nbsp;&nbsp;
      <div>Clients</div>
    </div>
    <div class="menu-btn"  :class="{active: menuItem=== 'Ventes'}" @click="$router.push('/ventes'); setMenuItem('Ventes');setHighlightPosition()">
      <i class="fas fa-file-signature" style="font-size: 25px"></i>
      &nbsp;&nbsp;
      <div>Ventes</div>
    </div>
  </div>
  </div>

</template>

<script>
import Version from "@/components/Version";
export default {
  name: 'Menu',
  data() {
    return {
      menuItem: "home",
    };
  },
  components: {
    Version
  },
  methods: {
    setMenuItem(item) {
      this.menuItem = item;
    },
    setHighlightPosition() {
      if (this.menuItem === "Home") {
        document.getElementsByClassName("highlight")[0].style.bottom = "33.2rem";
      } else if (this.menuItem === "Clients") {
        document.getElementsByClassName("highlight")[0].style.bottom = "24.1rem";
      } else if (this.menuItem === "About") {
        document.getElementsByClassName("highlight")[0].style.bottom = "15rem";
      }
    },
  },
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
.menu-container{
  margin-left: 2rem;
  display: flex;
  height: 100%;
  width: max-content;
  align-items: center;

}
.menu{
  display: flex;
  flex-direction: column;
  /*background-color: #c0c0c0;*/
  font-family: Arial;
  height: max-content;
  width: max-content;
  border-radius:100px;
  z-index: 9;


}
.menu-btn{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem ;
  width: 6rem ;
  cursor: pointer;
  border-radius: 1rem;
  margin: 0.5rem 0;
  padding: 0 0.5rem;
  border: transparent solid 1px;
  font-weight: bold;

}
.menu-btn:hover{
  /*color: #ffffff;*/
  font-weight: bold;
  border: white solid 1px;
  transition-duration: 0.3s;
}

.active{
  color: #ffffff;
  font-weight: bold;
  background-color: red;
  transition-duration: 0.3s;
}
</style>
