<template>
  <div class="menu-container">
    <div class="inside-container">
      <img src="https://i.gifer.com/3Iga.gif" alt="user_image" class="user_image">
      <div class="user">
        <div class="user_infos">
          <div>{{ prenom }}</div>
          &nbsp;
          <div>{{ nom }}</div>
        </div>
        <div class="user_poste">
          {{ poste }}
        </div>
        <div style="font-size: 15px" class="btn_user_profile" :class="{user_active: $route.name=== 'Profil'}" @click="$router.push('/profil')"><i class="far fa-user" ></i></div>
      </div>
      <span class="span-user"></span>

      <div class="menu">
        <div class="menu-btn" :class="{active: $route.name=== 'Home'}" @click="$router.push('/');">
          <div style="margin-right: auto;" class="elpage">Home</div>
          <i class="fas fa-globe-europe" style="font-size: 20px"></i>
          &nbsp;&nbsp;
          <span class="span-active" :class="{span_visibility: $route.name=== 'Home'}"></span>
        </div>

        <div class="menu-btn" :class="{active: $route.name=== 'Contrats'}" @click="$router.push('/contrats');">
          <div style="margin-right: auto;" class="elpage">Contrats</div>
          <i class="far fa-file-alt" style="font-size: 20px"></i>
          &nbsp;&nbsp;
          <span class="span-active" :class="{span_visibility: $route.name=== 'Contrats'}"></span>
        </div>

        <div class="menu-btn" :class="{active: $route.name=== 'Clients'}"
             @click="$router.push('/clients');">
          <div style="margin-right: auto;" class="elpage">Clients</div>
          <i class="far fa-address-book" style="font-size: 20px"></i>
          &nbsp;&nbsp;
          <span class="span-active" :class="{span_visibility: $route.name=== 'Clients'}"></span>
        </div>

        <div class="menu-btn" :class="{active: $route.name=== 'Produits'}"
             @click="$router.push('/produits');">
          <div style="margin-right: auto;" class="elpage">Produits</div>
          <i class="far fa-lemon" style="font-size: 20px"></i>
          &nbsp;&nbsp;
          <span class="span-active" :class="{span_visibility: $route.name=== 'Produits'}"></span>
        </div>

        <div class="btn-login" :class="{btn_login_inactive: $route.name=== 'Produits'}">
          <i class="fas fa-power-off" :class="{login_connected: login_status===true}"
             style="font-size: 20px;"></i>
          &nbsp;&nbsp;
          &nbsp;
          <div>{{ login_status }}</div>

        </div>


      </div>
    </div>
    <img src="../assets/logo.png" alt="" class="logo">
    <Version style="margin-bottom:1rem "/>

  </div>


</template>

<script>
import Version from "@/components/Version";

export default {
  name: 'Menu',
  data() {
    return {};


  },
  props: {
    login_status: "",
    nom: "",
    prenom: "",
    poste: "",
  },
  components: {
    Version
  },
  methods: {},
}

</script>


<style scoped>
.menu-container {
  /*margin-left: 1rem;*/
  display: flex;
  flex-direction: column;
  height: 100%;
  width: max-content;
  align-items: center;
  justify-content: center;
  margin: auto 0 auto 2.5rem;
}

.inside-container {
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 13rem;
  align-items: center;
  /*justify-content: center;*/
  border-radius: 20px;
  box-shadow: 0 10px 10px #232222;
  background: #505050;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.menu {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /*background-color: #c0c0c0;*/
  font-family: Arial;
  height: 100%;
  width: 100%;
}

.menu-btn {
  display: flex;
  align-items: center;
  justify-content: start;
  min-height: 2.5rem;
  min-width: 85%;
  cursor: pointer;
  border-radius: 0.5rem;
  margin: 0 1rem 0.5rem 1rem;
  font-weight: 600;
  padding: 0 0.5rem;
}

.menu-btn:hover {
  background-color: #29292a;
  transition-duration: 0.3s;
}

.active {
  transition-duration: 0.3s;
  background: #29292a;
}

.span-active {
  height: 1.5rem;
  width: 0.4rem;
  background-color: red;
  border-radius: 99px;
  display: none;
}

.elpage {
  margin-left: 1rem;
}

.span_visibility {
  display: block;
}

.logo {
  height: 2.5rem;
  width: auto;
  margin-bottom: 0.5rem;
}

.user_image {
  margin-top: 1rem;
  min-height: 5rem;
  max-height: 5rem;
  min-width: 5rem;
  max-width: 5rem;
  object-fit: cover;
  margin-bottom: 0.5rem;
  border-radius: 100%;
}

.btn-login {
  background: #29292a;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 2rem;
  min-width: 70%;
  cursor: pointer;
  border-radius: 0.5rem;
  margin: auto 1rem 1rem 1rem;
  font-weight: 500;
  padding: 0 0.5rem;
}

.btn-login:hover {
  background: #ff5757;
  transition-duration: 0.3s;

}

.login_connected {
  color: #18ff00 !important;
}

.user {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.user_infos {
  display: flex;
  font-size: 18px;
  font-weight: 500;
  height: 1.8rem;
}

.user_poste {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #adadad;
  font-size: 12px;
  font-weight: 600;
}

.span-user {
  margin-top: 0.5rem;
  height: 0.15rem;
  width: 3rem;
  background-color: #c9c9c9;
  border-radius: 99px;
}
.btn_user_profile{
  display: flex;
  justify-content: center;
  background-color: #232222;
  height: 2rem;
  width: 2rem;
  cursor: pointer;
  color: #a4a4a4;
  align-items: center;
  border-radius: 3rem;
  border: 2px solid #a4a4a4;
}
.btn_user_profile:hover, btn_user_profile:focus, btn_user_profile:active{
  background-color: #29292a;
  border-color: white;
  color: white;
  transition-duration: 0.3s;
}
.user_active{
  border-color: red !important;
  color: white;
}
</style>
