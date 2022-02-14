<template>
  <div v-if="database && connected === false" class="page">
    <div class="titre">
      <!--      <p style="font-size: 30px; font-weight: bold">{{ $route.name }}</p>-->
    </div>
    <div class="content" style="justify-content: center; align-items: center;">
      <div class="connexionForm">
        <img :src="link_img" alt="user_image" class="user_image" style="margin-top: 3rem">
        <h3 style="height: 0.5rem">Bienvenue,</h3>
        <input type="text" v-model="username" placeholder="Nom d'utilisateur" class="input_connexion" style="margin-bottom: 0">
        <input type="password" v-model="password" placeholder="Mot de passe" class="input_connexion" style="margin-top: 0.5rem">
        <div @click="ChangeConnexionStatus" class="connexion_button">Connexion</div>

      </div>
    </div>
  </div>


</template>

<script>
import ProduitsPrix from '../components/ProduitsPrix.vue'

export default {
  name: 'Connexion',
  data() {
    return {
      link_img: this.database.user.profil_pic_link,
      username: '',
    }
  },
  components: {},
  props: {
    database: "",
    connected: "",
  },

  methods: {
    ChangeConnexionStatus() {
      this.$emit('ConnexionOnOff');
    },
  }
}
</script>
<style scoped>
.page {
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 100%;

}

.titre {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.content {
  display: flex;
  width: 100%;
  height: 100%;
  /*border: 1px solid #161a28;*/
  margin-bottom: 1rem;
}

.connexionForm {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #505050;
  width: 20rem;
  height: 25rem;
  border-radius: 0.5rem;
}

.connexion_button {
  background-color: #232222;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
  /*margin-top: 0.5rem;*/
  color: white;
  display: flex;
  align-items: center;
  box-shadow: 0 0px 0px rgba(0, 169, 0, 0.25);
  width: max-content;
  padding: 0.5rem;
  border: 2px solid transparent;
  height: 1rem;
  margin: auto 0 3rem 0;
}

.connexion_button:hover, connexion_button:focus, connexion_button:active {
  /*background-color: #4c8f4a;*/
  /*border-color: transparent;*/
  transition: ease-in-out 0.2s;
  background-color: #00a900;
  box-shadow: 0 0px 20px rgba(0, 169, 0, 0.70);
}

.input_connexion {
  margin-bottom: 1rem;
  margin-top: auto;
  background-color: #7a7a7a;
  color: white;
}
.input_connexion::placeholder {
  color: #505050;
}
</style>