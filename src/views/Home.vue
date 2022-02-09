<template>
  <div v-if="database" class="page">
    <div class="titre">
      <p style="font-size: 30px; font-weight: bold">{{ $route.name }}</p>
    </div>
    <div class="content" style="justify-content: center; align-items: center;">
      <div class="infos_resume">

        <div class="section_resume">
          <div class="info_brf_container">
            <div>Nombre de clients</div>
            <div class="under_number">{{ nbClients }}</div>
          </div>
          <div class="info_brf_container">
            <div>Nombre de commandes</div>
            <div class="under_number">{{ nbCommandes }}</div>

          </div>
        </div>

        <div class="section_resume">
          <div class="info_brf_container">
            <div>Nombre de produits</div>
            <div class="under_number">{{ nbProduits }}</div>

          </div>
          <div class="info_brf_container">
            <div>Total de tous les produits</div>
            <div class="under_number">{{ TotalProduits }} €</div>

          </div>
        </div>
<!--        <div class="infobox_btn_supp" style="width: max-content; height: 1rem" @click="ChangeConnexionStatus">Déconnexion</div>-->
      </div>
      <!--      <ProduitsPrix :database="database"/>-->
    </div>
  </div>


</template>

<script>
import ProduitsPrix from '../components/ProduitsPrix.vue'

export default {
  name: 'Home',
  data() {
    return {
      nbClients: this.database.clients.length,
      nbCommandes: this.database.contrats.length,
      nbProduits: this.database.produits.length,
      PRoduitsTotal: 0,
      allProduitsPrix: this.database.produits.map(produit => produit.prix),
      TotalProduits: this.TotalPrixProduits(),
    }
  },
  components: {
    ProduitsPrix
  },
  props: {
    database: "",
    connected: "",
  },
  methods: {
    TotalPrixProduits() {
      let total = 0;
      this.database.produits.forEach(produit => {
        total += parseInt(produit.prix);
      })
      return total;
    },
    ChangeConnexionStatus() {
      this.$emit('ConnexionOnOff');
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