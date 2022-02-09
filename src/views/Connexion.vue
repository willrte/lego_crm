<template>
  <div v-if="database && connected === false" class="page">
    <div class="titre">
      <p style="font-size: 30px; font-weight: bold">{{ $route.name }}</p>
    </div>
    <div class="content" style="justify-content: center; align-items: center;">
      <div @click="ChangeConnexionStatus" class="infobox_btn_save" style="width: max-content; padding: 0.5rem">Connexion</div>
    </div>
  </div>


</template>

<script>
import ProduitsPrix from '../components/ProduitsPrix.vue'

export default {
  name: 'Connexion',
  data() {
    return {
    }
  },
  components: {
  },
  props: {
    database: "",
    connected: "",
  },
  methods: {
    ChangeConnexionStatus(){
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
</style>