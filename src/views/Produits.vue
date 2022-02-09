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
              <div>Ajouter un produit</div>
              <button @click="closeAjout()" class="infobox_btn_close" style="margin-left: 1rem"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div style="display: flex; width: 100%; margin-bottom: 0.5rem">
              <div style="margin: 0.2rem auto 0 1rem ;">Nom</div>
              <input type="text" style="width: 50%" v-model="nom" placeholder="Nom du produit">
            </div>
            <div style="display: flex; width: 100%; margin-bottom: 0.5rem">
              <div style="margin: 0.2rem auto 0 1rem ">Collection</div>
<!--              <input type="text" style="width: 50%" v-model="collection_id" placeholder="Numéro de collection">-->
              <select id="collections" class="inputsecours" style="width: 50%" v-model="collection_id" placeholder="Collection du produit" >
                <option v-for="cat in database.collections" v-bind:value="cat.id">{{cat.nom}}</option>
              </select>
            </div>
            <div style="display: flex; width: 100%; margin-bottom: 0.5rem">
              <div style="margin: 0.2rem auto 0 1rem ">Prix (€)</div>
              <input type="number" style="width: 50%;" v-model="prix" placeholder="Prix">
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

        <div class="item_container" v-for="item in database.produits">
          <div class="item_description">
            <div class="item">
              <div style="font-size: 20px; font-weight: bold">{{ item.nom }}</div>&nbsp;
              <div style="font-size: 20px"> - {{ item.prix }}€</div>
            </div>
            <div class="item">
              <div style="font-size: 15px; color: #adadad">Lego {{findCollectionName(item.collection_id)}}</div>
            </div>
          </div>
          <div class="actions_item">

            <button v-if="!item.showOptions" @click="openEditor(item)" class="infos_btn"><i class="fas fa-pen-alt"></i></button>
            <button v-if="item.showOptions" @click="openEditor(item)" style="background: #40819d !important;" class="infos_btn"><i class="fas fa-pen-alt"></i></button>
            <button @click="deleteElement(item.id)" class="infobox_btn_supp" style="margin-left: auto"><i class="fa-solid fa-xmark"></i></button>
            <div v-if="item.showOptions">

              <div class="infobox">
                <div style="display: flex; align-items: center; margin-bottom: 1rem">
                  <div>Modifier les infos</div>
                  <button @click="closeEditor(item)" class="infobox_btn_close" style="margin-left: 1rem"><i class="fa-solid fa-xmark"></i></button>
                </div>
                <div style="display: flex; width: 100%; margin-bottom: 0.5rem">
                  <div style="margin: 0.2rem auto 0 1rem ;">Nom</div>
                  <input type="text" style="width: 50%" v-model="item.nom" placeholder="Nom du produit">
                </div>
                <div style="display: flex; width: 100%; margin-bottom: 0.5rem">
                  <div style="margin: 0.2rem auto 0 1rem ">Collection</div>
<!--                  <input type="text" style="width: 50%" v-model="item.collection_id" placeholder="Numéro de collection">-->
                  <select id="collectionsv2" class="inputsecours" style="width: 50%" v-model="item.collection_id" placeholder="Collection du produit" >
                    <option v-for="cat in database.collections" v-bind:value="cat.id">{{cat.nom}}</option>
                  </select>
                </div>
                <div style="display: flex; width: 100%; margin-bottom: 0.5rem">
                  <div style="margin: 0.2rem auto 0 1rem ">Prix (€)</div>
                  <input type="number" style="width: 50%;" v-model="item.prix" placeholder="Prix">
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
  name: 'Produits',
  data() {
    return {
      nom: '',
      prix: '',
      collection_id: '',
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
      if (this.nom !=='' && this.prix!=='' && this.collection_id!=='') {
        this.showAjout = false;
        this.addProduit()
        this.nom = '';
        this.prix = '';
        this.collection_id = '';
      } else {
        alert('Veuillez remplir tous les champs')
      }
    },
    addProduit() {
      this.database.produits.push({
        id: this.generateId().toString(),
        // showOptions: false,
        nom: this.nom,
        collection_id: this.collection_id.toString(),
        prix: this.prix.toString(),
      });
      this.$emit('UpdateDB');
    },
    deleteElement(idItem) {
      // this.database.produits.splice(this.database.produits.findIndex((item)=>item.id===item),1)
      this.database.produits = this.database.produits.filter(item => item.id != idItem);
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
.ajout_item {
  display: flex;
}



.inputsecours{
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  background-color: #505050;
  border: 2px solid #505050;
  border-radius: 5px;
  color: white;
}
</style>