<template>
  <div v-if="database" class="page">
    <div class="titre">
      <p style="font-size: 30px; font-weight: bold">Produits</p>
      <button @click="addelement">addelement</button>
    </div>
    <div class="content">

      <div class="liste_items">

        <div class="item_container" v-for="item in database.produits">
          <div class="item_description">
            <div class="item">
              <p style="font-size: 20px; font-weight: bold">{{ item.nom }}</p>&nbsp;
            </div>
            <div class="item">
              <p style="font-size: 15px; color: #adadad">Collection {{ item.collection_id }}</p>
              <p style="font-size: 20px"> - {{ item.prix }}€</p>
            </div>
          </div>
          <div class="actions_item">

            <button v-if="!item.showOptions" @click="openEditor(item)" class="infos_btn">
              Infos
            </button>
            <button @click="deleteElement(item.id)" class="infobox_btn_close" style="margin-left: auto">supp</button>
            <div v-if="item.showOptions">
              <div class="infobox">
                <button @click="closeEditor(item)" class="infobox_btn_close" style="margin-left: auto">Fermer</button>
                <p>Edit options</p>
                <input type="text" style="width: 50%" v-model="item.nom" placeholder="Nom du produit">
                <button @click="closeAndSave(item)" class="infobox_btn_save">
                  Sauvegarder</button>
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
    addelement() {
      this.database.produits.push({
        id: "100",
        showOptions: false,
        nom: 'nom item',
        collection_id: 'Test collection',
        prix: '250',
      });
      this.$emit('UpdateDB');
    },
    deleteElement(idItem) {
      // this.database.produits.splice(this.database.produits.findIndex((item)=>item.id===item),1)
      this.database.produits = this.database.produits.filter(item => item.id != idItem);
      this.$emit('UpdateDB');
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
  height: 5rem;
  justify-content: center;
}

.content {
  display: flex;
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
}

.liste_items {
  display: flex;
  flex-direction: column;
  min-width: 100%;
  max-height: 90vh;
  margin: 0 2rem;
  overflow-y: auto;
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

.infos_btn {
  background-color: #232222;
  color: #fff;
  border: none;
  height: 2rem;
  border-radius: 5px;
  cursor: pointer;
  margin-left: auto;
}
.infobox_btn {
  background-color: #232222;
  color: #fff;
  border: none;
  height: 2rem;
  border-radius: 5px;
  cursor: pointer;
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
  margin-top: 0.8rem;
  transition: ease-in-out 0.2s;
  box-shadow: 0 10px 20px rgba(0, 169, 0, 0.70);
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
.infos_btn:active, .infos_btn:focus, .infos_btn:hover {
  background-color: #562f2f;
  transition-duration: 0.3s;
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
  width: 25rem;
  height: 13rem;
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
  width: 95vw;
  overflow: hidden;
}
</style>