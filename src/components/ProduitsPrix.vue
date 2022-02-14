<template>
  <!--  <canvas id="produits_chart"></canvas>-->

  <div>PRODIUUTS PRIXXX</div>
  <highcharts :options="chartOptions"></highcharts>
<!--  {{this.database.produits.map(produit => produit.prix)}}-->
<!--  {{allProduitsPrix}}-->

</template>

<script>
import {Chart} from 'highcharts-vue'
export default {
  name: "ProduitsPrix",
  data() {
    return {
      allProduitsPrix: this.database.produits.map(produit => produit.prix),
      prix: [1,2,3,4],
      chartOptions: {
        series: [{data: this.allProduitsPrix}]
      },
    }
  },
  components: {
    highcharts: Chart
  },
  props: {
    database: "",
  },
}
</script>

<style scoped>

</style>