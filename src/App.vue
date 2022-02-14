<template>
  <div v-if="database" class="app">

    <div v-if="connected"   class="menu">
      <Menu :database="database" :connected="connected" @ConnexionOnOff="ConnexionOnOff"  @UpdateDB="sendToDb"/>
    </div>

    <div class="pageActive">
      <router-view v-slot="{ Component }" @CheckConnexion="CheckConnexion" @ConnexionOnOff="ConnexionOnOff"
                   @UpdateDB="sendToDb" :database="database" :connected="connected"></router-view>
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
      page_title: 'Lego CRM -',
      connected: false,
      database: null,
      usernumber: 0,
    }
  },
  components: {
    Menu,
    Version,

  },
  async mounted() {
    await fetch('https://wizardly-hamilton-84a436.netlify.app/api/get-db')
      .then(response => response.json())
      .then(data => {
        this.database = data;
      })
  },
  methods: {
    sendToDb () {
      fetch('https://wizardly-hamilton-84a436.netlify.app/api/update-db',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*'
        },
        mode: 'cors',
        body: JSON.stringify(this.database)

      })
    },
    suppelement() {
      this.database.client.splice(this.database.client.findIndex((client)=>client.id===this.usernumber),1)
      this.sendToDb()
    },
    ConnexionOnOff() {
      if (this.connected) {
        this.connected = false;
        this.$router.push('/');
      } else {
        this.connected = true;
        this.$router.push('/home');
      }
    },
    CheckConnexion() {
      if (this.connected !== true) {
        this.$router.push('/');
      }
    },
  },
  // beforeMount() {
  //   fetch('http://localhost:8082/api/get-db')
  //       .then(response => response.json())
  //       .then(data => {
  //         this.database = data;
  //       })
  // },

}
</script>
<style>
input, [list] {
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  background-color: #505050;
  border: 2px solid #505050;
  border-radius: 5px;
  color: white;
}
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

.infobox {
  display: flex;
  position: absolute;
  align-items: center;
  z-index: 10;
  left: 30rem;
  top: 15rem;
  flex-direction: column;
  width: 30rem;
  min-height: max-content;
  background: #232222;
  box-shadow: 0 10px 50px rgba(35, 34, 34, 0.85);
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
  width: 98vw;
  overflow: hidden;
}

.add_btn {
  background-color: #232222;
  color: #fff;
  border: 2px solid #bda63f;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin: 0.5rem;
  font-size: 20px;
  font-weight: bold;
}

.add_btn:active, .add_btn:focus, .add_btn:hover {
  background-color: #bda63f;
  transition-duration: 0.3s;
}
.add_produit {
  background-color: #232222;
  color: #fff;
  border: 2px solid #bda63f;
  padding: 0.5rem 2rem;
  border-radius: 5px;
  cursor: pointer;
  margin: 0.5rem;
  font-size: 15px;
  font-weight: 500;
}

.add_produit:active, .add_produit:focus, .add_produit:hover {
  background-color: #bda63f;
  transition-duration: 0.3s;
}
.infos_btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #232222;
  color: #fff;
  border: 2px solid #40819d;
  height: 2rem;
  width: 2rem;
  padding: 1rem;
  font-size: 15px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: auto;
  margin-right: 1rem;
}

.item_container {
  display: flex;
  flex-direction: row;
  width: max-content;
  height: max-content;
  margin-bottom: 1rem;
  padding: 0.3rem 1rem;
  border-radius: 0.5rem;
  background: #505050;
  box-shadow: 0 10px 10px #232222;
}
.item {
  display: flex;
  max-height: max-content;
  align-items: center;
  flex-direction: row;
  width: 100%;
}
.item_description {
  display: flex;
  flex-direction: column;
  height: max-content;
  width: 55vw;
}
.actions_item {
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  margin-left: 2rem;
  width:max-content;
}
.infos_btn:active, .infos_btn:focus, .infos_btn:hover {
  background-color: #40819d;
  transition-duration: 0.3s;
}

.infobox_btn_save {
  background-color: #232222;
  height: 2rem;
  border-radius: 5px;
  cursor: pointer;
  /*margin-top: 0.5rem;*/
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
  transition: ease-in-out 0.2s;
  background-color: #00a900;
  box-shadow: 0 0px 20px rgba(0, 169, 0, 0.70);
}

.infobox_btn_close {
  display: flex;
  justify-content: center;
  background-color: #232222;
  height: 2rem;
  width: 2rem;
  border-radius: 5px;
  cursor: pointer;
  border: 2px solid #7a7a7a;
  color: white;
  /*padding: 1.2rem 2rem;*/
  align-items: center;
}

.infobox_btn_close:hover {
  background-color: #7a7a7a;
  border-color: transparent;
  transition: ease-in-out 0.2s;
}

.infobox_btn_supp {
  background-color: #232222;
  height: 2rem;
  width: 2rem;
  font-size: 15px;
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  border: 2px solid #9d5555;
  /*color: white;*/
  /*padding: 1.2rem 2rem;*/
  display: flex;
  align-items: center;
  justify-content: center;
  /*margin-right: 1rem;*/
}

.infobox_btn_supp:hover, info_btn_supp:focus, info_btn_supp:active {
  background-color: #9d5555;
  border-color: transparent;
  transition: ease-in-out 0.2s;
}
.infobox_btn_view {
  background-color: #232222;
  height: 2rem;
  width: 2rem;
  font-size: 15px;
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  border: 2px solid #75559d;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
}

.infobox_btn_view:hover, infobox_btn_view:focus, infobox_btn_view:active {
  background-color: #75559d;
  border-color: transparent;
  transition: ease-in-out 0.2s;
}
.date_container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: max-content;
  padding: 0.3rem 0.5rem;
  border-radius: 0.5rem;
  background: #29292a;
  color: white;
  font-size: 15px; font-weight: 400
}
.contrat_id_container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /*width: 8.5rem;*/
  width: max-content;
  height: max-content;
  padding: 0.1rem 0.5rem;
  border-radius: 0.5rem;
  /*background: #9d5555;*/
  background: #af3232;
  color: white;
  font-size: 18px;
  font-weight: 500
}
@media screen and (max-width: 1100px) {
  .item_container {
    flex-direction: column;
    /*align-items: center;*/
    justify-content: center;
  }
  .actions_item {
    margin-left: 0;
    margin-top: ;
  }
}
.right_data_infos{
  display:flex;
  justify-content: left;
  width:50%;
}
.left_data_infos{
  display:flex;
  width:50%;
  margin-right:1rem;
  justify-content: right;
}
.activated_box{
  border: 2px solid #ffffff;
}

.info_brf_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #181818;
  border-radius: 10px;
  width: 90%;
  height: 4rem;
  margin: 1rem;
  padding: 1rem;
}

.infos_resume {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}

.section_resume {
  display: flex;
  width: 100%;
  justify-content: center
}

@media screen and (max-width: 1000px) {
  .section_resume {
    flex-direction: column;
  }
}

.under_number {
  font-weight: 700;
  font-size: 30px;
  color: #ff8080
}
.user_image {
  margin-top: 1rem;
  min-height: 5rem;
  max-height: 5rem;
  min-width: 5rem;
  max-width: 5rem;
  object-fit: cover;
  margin-bottom: 0.5rem;
  border-radius: 100%;
}
</style>
