<template>
  <div v-if="database" class="page">
    <div class="titre">
      <div style="font-size: 30px; font-weight: bold">{{ $route.name }}</div>
      <div class="ajout_item">
        <button v-if="!showAjout" @click="openAjout()" class="add_btn">+</button>
        <button v-if="showAjout" class="add_btn" style="background-color: #bda63f !important;">+</button>
        <div v-if="showAjout">
          <div class="infobox">
            <div style="display: flex; align-items: center; margin-bottom: 1rem">
              <div>Ajouter un client</div>
              <button @click="closeAjout()" class="infobox_btn_close" style="margin-left: 1rem">Fermer</button>
            </div>
            <div style="display: flex; width: 100%; margin-bottom: 0.5rem">
              <div style="margin: 0.2rem auto 0 1rem ;">Prénom</div>
              <input type="text" style="width: 50%" v-model="prenom" placeholder="Prénom">
            </div>
            <div style="display: flex; width: 100%; margin-bottom: 0.5rem">
              <div style="margin: 0.2rem auto 0 1rem ;">Nom</div>
              <input type="text" style="width: 50%" v-model="nom" placeholder="Nom">
            </div>
            <div style="display: flex; width: 100%; margin-bottom: 0.5rem">
              <div style="margin: 0.2rem auto 0 1rem ">Téléphone</div>
              <input type="tel" style="width: 50%" v-model="telephone" placeholder="Téléphone">
            </div>
            <div style="display: flex; width: 100%; margin-bottom: 0.5rem">
              <div style="margin: 0.2rem auto 0 1rem ">Email</div>
              <input type="email" style="width: 50%" v-model="email" placeholder="Email">
            </div>
            <div style="display: flex; flex-direction: column; align-items: center;width: 100%; margin-bottom: 0.5rem">
              <div style="margin: 0.2rem auto 0.5rem 1rem">Adresse</div>
              <input type="text" style="width: 80%; margin-bottom: 0.5rem" v-model="adresse" placeholder="Rue">
              <div style="display: flex;justify-content: center">
                <input type="text" style="width: 20%; margin-right: 2%" v-model="code_postal"
                       placeholder="CP">
                <input type="text" style="width: 50%;" v-model="ville" placeholder="Ville">
              </div>
            </div>
            <button @click="closeAndSaveAjout()" class="infobox_btn_save">
              Sauvegarder
            </button>
          </div>
          <div class="allPageClick" @click="closeAjout()"></div>
        </div>
      </div>
    </div>
    <div class="content">

      <div class="liste_items">

        <div class="item_container" v-for="item in database.clients">
          <div class="item_description">
            <div class="item" style="font-size: 20px;">
              <p style="font-weight: 500">{{ item.prenom }}</p>&nbsp;
              <p style="font-weight: 500; color: #ff5a5a">{{ item.nom }}</p>&nbsp;
            </div>

            <div class="item" style="font-size: 15px; color: #d7d7d7">
              <p style="font-weight: 500">Tel : {{ item.telephone }}</p>&nbsp;
            </div>

            <div class="item" style="font-size: 15px; color: #d7d7d7">
              <p>Mail : {{ item.email }}</p>
            </div>

            <div class="item" style="font-size: 15px; color: #adadad">
              <p>Adresse : {{ item.adresse }},</p>&nbsp;
              <p>{{ item.code_postal }} -</p>&nbsp;
              <p>{{ item.ville }}</p>
            </div>
          </div>
          <div class="actions_item">

            <button v-if="!item.showOptions" @click="openEditor(item)" class="infos_btn">Modifier</button>
            <button @click="deleteElement(item.id)" class="infobox_btn_supp" style="margin-left: auto">&nbsp;X&nbsp;
            </button>
            <div v-if="item.showOptions">

              <div class="infobox">
                <div style="display: flex; align-items: center; margin-bottom: 1rem">
                  <div>Modifier les infos</div>
                  <button @click="closeEditor(item)" class="infobox_btn_close" style="margin-left: 1rem">Fermer</button>
                </div>
                <div style="display: flex; width: 100%; margin-bottom: 0.5rem">
                  <div style="margin: 0.2rem auto 0 1rem ;">Prénom</div>
                  <input type="text" style="width: 50%" v-model="item.prenom" placeholder="Prénom">
                </div>
                <div style="display: flex; width: 100%; margin-bottom: 0.5rem">
                  <div style="margin: 0.2rem auto 0 1rem ;">Nom</div>
                  <input type="text" style="width: 50%" v-model="item.nom" placeholder="Nom">
                </div>
                <div style="display: flex; width: 100%; margin-bottom: 0.5rem">
                  <div style="margin: 0.2rem auto 0 1rem ">Téléphone</div>
                  <input type="tel" style="width: 50%" v-model="item.telephone" placeholder="Téléphone">
                </div>
                <div style="display: flex; width: 100%; margin-bottom: 0.5rem">
                  <div style="margin: 0.2rem auto 0 1rem ">Email</div>
                  <input type="email" style="width: 50%" v-model="item.email" placeholder="Email">
                </div>
                <div style="display: flex; flex-direction: column; align-items: center;width: 100%; margin-bottom: 0.5rem">
                  <div style="margin: 0.2rem auto 0.5rem 1rem">Adresse</div>
                  <input type="text" style="width: 80%; margin-bottom: 0.5rem" v-model="item.adresse" placeholder="Rue">
                  <div style="display: flex;justify-content: center">
                    <input type="text" style="width: 20%; margin-right: 2%" v-model="item.code_postal"
                           placeholder="CP">
                    <input type="text" style="width: 50%;" v-model="item.ville" placeholder="Ville">
                  </div>
                </div>
                <button @click="closeAndSave(item)" class="infobox_btn_save">
                  Sauvegarder
                </button>
              </div>

              <div class="allPageClick" @click="closeEditor(item)"></div>
            </div>
          </div>

        </div>

        <!--        {{database.produits}}-->
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Clients',
  data() {
    return {
      nom: '',
      prenom: '',
      telephone: '',
      email: '',
      adresse: '',
      code_postal: '',
      ville: '',
      showAjout: false,
    }
  },
  props: {
    database: "",
  },
  methods: {
    openEditor(item) {
      item.showOptions = true
    },
    closeEditor(item) {
      item.showOptions = false;
    },
    closeAndSave(item) {
      item.showOptions = false;
      this.$emit('UpdateDB');
    },
    openAjout() {
      this.showAjout = true
    },
    closeAjout() {
      this.showAjout = false;
    },
    closeAndSaveAjout() {
      if (this.nom !== ''
          && this.prenom !== ''
          && this.telephone !== ''
          && this.email !== ''
          && this.adresse !== ''
          && this.code_postal !== ''
          && this.ville !== '') {

        this.showAjout = false;
        this.addProduit()
        this.nom = '';
        this.prenom = '';
        this.telephone = '';
        this.email = '';
        this.adresse = '';
        this.code_postal = '';
        this.ville = '';
      } else {
        alert('Veuillez remplir tous les champs')
      }
    },
    addProduit() {
      this.database.clients.push({
        id: this.generateId().toString(),
        // showOptions: false,
        nom: this.nom,
        prenom: this.prenom,
        telephone: this.telephone.toString(),
        email: this.email,
        adresse: this.adresse,
        code_postal: this.code_postal.toString(),
        ville: this.ville,

      });
      this.$emit('UpdateDB');
    },
    deleteElement(idItem) {
      // this.database.produits.splice(this.database.produits.findIndex((item)=>item.id===item),1)
      this.database.clients = this.database.clients.filter(item => item.id != idItem);
      this.$emit('UpdateDB');
    },
    generateId(longeurID = 25) {
      let result = '';
      let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789,;:!?./§$%&é(-è_çà)=+*#@';
      let charactersLength = characters.length;
      let i;
      for (i = 0; i < longeurID; i++) {
        result = result + characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
      //  Probabilité que les deux id soient identiques : 1 / 6000 milliards
      //  calcul : 25 (longueur de l'id) puissance 86 (nombre de caractères possibles)
    },
    findCollectionName(id) {
      return this.database.collections.find(collection => collection.id === id).nom;
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
  flex-direction: column;
  width: 100%;
  align-items: center;
  min-height: 15%;
  padding: 0.5rem 0;
  justify-content: center;
}

.content {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.liste_items {
  display: flex;
  flex-direction: column;
  min-width: 100%;
  max-height: 90vh;
  margin: 0 2rem;
  overflow-y: scroll;
  overflow-x: hidden;
}

.item_container {
  display: flex;
  flex-direction: row;
  width: 90%;
  margin-bottom: 1rem;
  padding: 0.3rem 1rem;
  border-radius: 0.5rem;
  background: #505050;
  box-shadow: 0 10px 10px #232222;
}

.item {
  display: flex;
  max-height: 2rem;
  align-items: center;
  flex-direction: row;
  width: 100%;
}

.actions_item {
  display: flex;
  align-items: center;
  margin-left: auto;
  width: 15%;
}

.ajout_item {
  display: flex;
}

.add_btn {
  background-color: #232222;
  color: #fff;
  border: 2px solid #bda63f;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin: 0.5rem;
  font-size: 20px;
  font-weight: bold;
}

.add_btn:active, .add_btn:focus, .add_btn:hover {
  background-color: #bda63f;
  transition-duration: 0.3s;
}

.infos_btn {
  background-color: #232222;
  color: #fff;
  border: 2px solid #40819d;
  height: 2rem;
  border-radius: 5px;
  cursor: pointer;
  margin-left: auto;
}

.infos_btn:active, .infos_btn:focus, .infos_btn:hover {
  background-color: #40819d;
  transition-duration: 0.3s;
}

.infobox_btn_save {
  background-color: #232222;
  color: #fff;
  border: none;
  height: 2rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
  border: 2px solid #00a900;
  color: white;
  padding: 1.2rem 2rem;
  display: flex;
  align-items: center;
  box-shadow: 0 0px 0px rgba(0, 169, 0, 0.25);
}

.infobox_btn_save:hover, info_btn_save:focus, info_btn_save:active {
  /*background-color: #4c8f4a;*/
  /*border-color: transparent;*/
  transition: ease-in-out 0.2s;
  background-color: #00a900;
  box-shadow: 0 0px 20px rgba(0, 169, 0, 0.70);
}

.infobox_btn_close {
  background-color: #232222;
  height: 2rem;
  border-radius: 5px;
  cursor: pointer;
  border: 2px solid #7a7a7a;
  color: white;
  /*padding: 1.2rem 2rem;*/
  display: flex;
  align-items: center;
}

.infobox_btn_close:hover {
  background-color: #7a7a7a;
  border-color: transparent;
  transition: ease-in-out 0.2s;
}

.infobox_btn_supp {
  background-color: #232222;
  height: 2rem;
  border-radius: 5px;
  cursor: pointer;
  border: 2px solid #9d5555;
  color: white;
  /*padding: 1.2rem 2rem;*/
  display: flex;
  align-items: center;
}

.infobox_btn_supp:hover {
  background-color: #9d5555;
  border-color: transparent;
  transition: ease-in-out 0.2s;
}


.item_description {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.infobox {
  display: flex;
  position: absolute;
  align-items: center;
  z-index: 10;
  left: 30rem;
  top: 15rem;
  flex-direction: column;
  width: 30rem;
  min-height: max-content;
  background: #232222;
  /*box-shadow: 0 10px 10px #232222;*/
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: 1rem;
  overflow: hidden;
}

.allPageClick {
  display: flex;
  position: absolute;
  background: transparent;
  z-index: 2;
  left: 1px;
  top: 1px;
  height: 99vh;
  width: 98vw;
  overflow: hidden;
}

.inputsecours {
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  background-color: #505050;
  border: 2px solid #505050;
  border-radius: 5px;
  color: white;
}
</style>