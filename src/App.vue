<template>
  <div v-if="database" class="app">

    <div class="menu">
      <Menu :login_status="login_status_test" :nom="nom" :prenom="prenom" :poste="poste"/>
    </div>

<!--    <div style="display: flex; flex-direction: column; width: 5rem">-->
<!--      <input v-model="usernumber">-->
<!--      <button @click="addelement">addelement</button>-->
<!--      <div>{{database.client.find((client)=>client.id===usernumber)}}</div>-->
<!--    </div>-->
<!--    <div style="display: flex; flex-direction: column; width: 5rem">-->
<!--      <input v-model="usernumber">-->
<!--      <button @click="suppelement">suppelement</button>-->
<!--    </div>-->

    <div class="pageActive">
      <router-view v-slot="{ Component }" :database="database"></router-view>
    </div>

  </div>

</template>

<script>
import Menu from './components/Menu.vue';
import Version from './components/Version.vue';

const fs = require("fs");
export default {
  name: 'App',
  data() {
    return {
      login_status_test: 'Connexion',
      prenom: 'William',
      nom: 'Ratelade',
      poste: 'UX/UI Designer',
      database: null,
      usernumber: 0,
    }
  },
  components: {
    Menu,
    Version,
  },
  async mounted() {
    await fetch('http://localhost:8082/api/get-db')
      .then(response => response.json())
      .then(data => {
        this.database = data;
      })
  },
  methods: {
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
<style>
html, body {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  font-family: Poppins;
  -webkit-tap-highlight-color: transparent;
}
.app{
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  color: #ffffff;
  background: #29292a;
}
.pageActive {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /*padding: 0 1rem;*/
}


</style>
