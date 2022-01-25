<template>
  <div v-if="database" class="page">
    <div class="titre">
      <p style="font-size: 30px; font-weight: bold">Contrats</p>
    </div>
    <div class="content">
      <div class="liste_contrats">
        {{database.contrats}}
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: 'Contrats',
  data() {
    return {}
  },
  props: {
    database: "",
  },
  methods: {

  }
}
</script>
<style scoped>
.page {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

}
.titre{
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
}
.content{
  display: flex;
  width: 100%;
  height: 100%;
  border:1px solid #161a28;
  margin-bottom: 1rem;
}
.liste_contrats{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
</style>