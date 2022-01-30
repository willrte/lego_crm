<template>
  <div v-if="database" class="page">
    <div class="titre">
      <p style="font-size: 30px; font-weight: bold">Produits</p>
    </div>
    <div class="content">
      <div class="liste_items">
        <div class="item_container" v-for="produit in database.produits">
          <div class="item_description">
            <div class="item">
              <p style="font-size: 20px; font-weight: bold">{{ produit.nom }}</p>&nbsp;
            </div>
            <div class="item">
              <p style="font-size: 15px; color: #adadad">Collection {{ produit.collection_id }}</p>
              <p style="font-size: 20px"> - {{ produit.prix }}€</p>
            </div>
          </div>
          <div class="actions_item">
            <button class="infos_btn" @click="infoboxInvert(produit.id)">Voir infos</button>
          </div>
          <div id="{{produit.id}}" class="infobox">
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
    infoboxInvert(id) {
      var infobox = document.getElementById(id);
      if (infobox.style.display === "block") {
        infobox.style.display = "none";
      } else {
        infobox.style.display = "block";
      }
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
  position: absolute;
  z-index: 2;
  display: none;
  flex-direction: column;
  width: 50%;
  height: 10rem;
  background: #232222;
  box-shadow: 0 10px 10px #232222;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: 1rem;
}
</style>