<template>
  <div v-if="database" class="page">
    <div class="titre">
      <p style="font-size: 30px; font-weight: bold">{{ $route.name }}</p>
    </div>
    <div class="content" style="justify-content: center; align-items: center;">

      <div class="infos_resume" style="width: 70%;">
        <div style="display: flex; width: 100%;height: 5rem; margin-bottom: 0.5rem">
          <h2 style="color: #7a7a7a">Informations personelles</h2>
        </div>

        <div style="display: flex; width: 100%; margin-bottom: 0.5rem">
          <div style="margin: 0.2rem auto 0 1rem;">Prénom</div>
          <input type="text" style="width: 50%" v-model="prenom" placeholder="Prénom">
        </div>
        <div style="display: flex; width: 100%; margin-bottom: 0.5rem">
          <div style="margin: 0.2rem auto 0 1rem ;">Nom</div>
          <input type="text" style="width: 50%" v-model="nom" placeholder="Nom">
        </div>
        <div style="display: flex; width: 100%; margin-bottom: 0.5rem">
          <div style="margin: 0.2rem auto 0 1rem ">Poste</div>
          <input type="tel" style="width: 50%" v-model="poste" placeholder="Téléphone">
        </div>
        <div style="display: flex; width: 100%; margin-bottom: 0.5rem">
          <div style="margin: 0.2rem auto 0 1rem ">Image de profil</div>
          <input type="tel" style="width: 50%" v-model="link_img" placeholder="Lien de l'image">
        </div>
        <div style="display: flex; width: 100%; margin-bottom: 0.5rem; justify-content: center">
          <img :src="link_img" alt="user_image" class="user_image">
        </div>
        <div style="display: flex; width: 100%;height: 5rem; margin-bottom: 0.5rem">
          <h2 style="color: #7a7a7a">Informations de connexion</h2>
        </div>

        <div style="display: flex; width: 100%; margin-bottom: 0.5rem">
          <div style="margin: 0.2rem auto 0 1rem ">Pseudo de connexion</div>
          <input type="tel" style="width: 50%" v-model="username" placeholder="Téléphone">
        </div>
        <div style="display: flex; width: 100%; margin-bottom: 0.5rem">
          <div style="margin: 0.2rem auto 0 1rem ">Mot de passe</div>
          <input type="password" style="width: 50%" v-model="psswrd" placeholder="Téléphone">
        </div>
        <div style="display: flex; width: 100%;height: 2rem;"></div>
<!--        {{user_infos}}-->
        <div class="infobox_btn_save" style="width: max-content; height: 1rem" @click="saveInfos">Sauvegarder</div>

      </div>
    </div>
    <!--      <ProduitsPrix :database="database"/>-->
  </div>



</template>

<script>
export default {
  name: 'Profil',
  data() {
    return {
      user_infos: this.database.user,
      prenom: this.database.user.name,
      nom: this.database.user.lastname,
      poste: this.database.user.poste,
      username: this.database.user.username,
      link_img: this.database.user.profil_pic_link,
      psswrd: this.database.user.password,

    }
  },
  props: {
    database: "",
  },
  methods: {
    saveInfos(){
      this.database.user.name = this.prenom;
      this.database.user.lastname = this.nom;
      this.database.user.poste = this.poste;
      this.database.user.username = this.username;
      this.database.user.password = this.psswrd;
      this.database.user.profil_pic_link = this.link_img;
      this.$emit('UpdateDB');
      this.$router.go();
    }
  },
  beforeMount() {
    this.$emit('CheckConnexion');
  },
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


</style>