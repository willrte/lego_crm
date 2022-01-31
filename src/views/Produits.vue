<template>
  <div v-if="database" class="page">
    <div class="titre">
      <p style="font-size: 30px; font-weight: bold">Produits</p>
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
            <div v-if="item.showOptions">
              <div class="infobox">
                <button @click="closeEditor(item)" class="infos_btn">Fermer</button>
                Edit options
                <input type="text" v-model="item.nom" placeholder="Nom du produit">
                <button @click="closeAndSave(item)" class="infos_btn" style="margin-top: 1rem">Sauvegarder</button>
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
    return {}
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
      this.sendToDb();
    },
    sendToDb () {
      fetch('http://localhost:8082/api/update-db',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*'
        },
        mode: 'cors',
        body: JSON.stringify(this.database)

      })
    },
    addelement() {
      this.database.client.push({
        id: this.usernumber,
        nom: 'Caron',
        prenom: 'Théo',
        poste: 'UX/UI Designer',
        email: ''
      });
      this.sendToDb();

    },
    suppelement() {
      this.database.client.splice(this.database.client.findIndex((client)=>client.id===this.usernumber),1)
      this.sendToDb()
    }

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

.infos_btn {
  background-color: #232222;
  color: #fff;
  border: none;
  height: 2rem;
  border-radius: 5px;
  cursor: pointer;
  margin-left: auto;
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
  z-index: 10;
  left: 30rem;
  top: 15rem;
  flex-direction: column;
  width: 30rem;
  height: 8rem;
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