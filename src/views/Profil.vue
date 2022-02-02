<template>
  <div v-if="database" class="page">
    <div class="titre">
      <p style="font-size: 30px; font-weight: bold">{{$route.name}}</p>
    </div>
    <div class="content">
    </div>
  </div>


</template>

<script>
export default {
  name: 'Profil',
  data() {
    return {}
  },
  props: {
    database: "",
  },
  methods: {}
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

.liste_items {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 100vh;
  margin: 0 2rem;
  /*overflow: scroll;*/
}

.item {
  display: flex;
  max-height: 2rem;
  align-items: center;
  flex-direction: row;
  width: 100%;
}

.item_container {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.3rem 1rem;
  border-radius: 0.5rem;
  background: #505050;
  box-shadow: 0 10px 10px #232222;
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
  background-color: #2f3556;
  transition-duration: 0.3s;
}
.item_description{
  display: flex;
  flex-direction: column;
  width: 100%;
}

</style>