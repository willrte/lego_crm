<template>
  <div v-if="database" class="page">
    <div class="titre">
      <div style="font-size: 30px; font-weight: bold">{{ $route.name }}</div>
      <div class="ajout_item">
        <button v-if="!showAjout" @click="openAjout()" class="add_btn">+</button>
        <button v-if="showAjout" class="add_btn" style="background-color: #bda63f !important;">+</button>
        <div v-if="showAjout">
          <div class="infobox">
            <div style="display: flex; align-items: center; margin-bottom: 1rem">
              <div>Passer un contrat</div>
              <button @click="closeAjout()" class="infobox_btn_close" style="margin-left: 1rem"><i
                  class="fa-solid fa-xmark"></i></button>
            </div>
            <div style="display: flex; width: 100%; margin-bottom: 0.5rem">
              <div style="margin: 0.2rem auto 0 1rem ">Client</div>
              <!--              <input type="text" style="width: 50%" v-model="collection_id" placeholder="Numéro de collection">-->
              <select class="inputsecours" style="width: 50%" v-model="id_client">
                <option v-for="client in database.clients" v-bind:value="client.id">{{ client.prenom }} {{
                    client.nom
                  }}
                </option>
              </select>
            </div>
            <div style="display: flex; width: 100%; margin-bottom: 0.5rem">
              <div style="margin: 0.2rem auto 0 1rem ;">
                <div style="height: 1.2rem">Date de la commande</div>
                <div style="color: #7a7a7a; font-size: 12px;">Laisser vide pour la date du jour</div>
              </div>
              <input type="date" style="width: 50%" v-model="date_commande"
                     placeholder="Laisser vide pour la date du jour">
            </div>
            <div style="display: flex; width: 100%; margin-bottom: 0.5rem">
              <div style="margin: 0.2rem auto 0 1rem ;">
                <div style="height: 1.2rem">Date du paiement</div>
                <div style="color: #7a7a7a; font-size: 12px;">Laisser vide pour la date du jour</div>
              </div>
              <input type="date" style="width: 50%" v-model="date_paiement"
                     placeholder="Laisser vide pour la date du jour">
            </div>
            <button @click="openShowProduitsContrat()" class="add_produit">Ajouter un produit</button>
            <div v-if="openShowProduitsContrat" class="infobox"
                 style="z-index: 15 !important; height: max-content; width: max-content">
              <button @click="closeShowProduitsContrat()" class="infobox_btn_close" style="margin-left: 1rem"><i
                  class="fa-solid fa-xmark"></i></button>
              <div
                  style="display: flex; align-items: center;justify-content: center; width: 100%; flex-wrap: wrap ;margin-bottom: 0.5rem">
                <select class="inputsecours" style="width: 50%" v-model="produits_contrat">
                  <option v-for="produit in database.produits" v-bind:value="produit.id">{{ produit.nom }}</option>
                </select>
                <div class="product_contrat"></div>
              </div>
            </div>
            <button @click="closeAndSaveAjout()" class="infobox_btn_save">Sauvegarder</button>

          </div>
          <div class="allPageClick" @click="closeAjout()"></div>
        </div>
      </div>
    </div>
    <div class="content">

      <div class="liste_items">
        <div class="item_container" v-for="item in database.contrats">
          <div class="item_description">
            <div class="item" style="margin-bottom: 0.3rem">
              <div style="font-size: 20px; font-weight: 500">Contrat n°</div>&nbsp;
              <!--              <div style="font-size: 20px; font-weight: 500">Contrat n° {{ item.id_client }}</div>&nbsp;-->
              <div class="contrat_id_container" style="margin-right: 1rem">C-{{ item.id }}</div>
            </div>
            <div class="item">
              <div style="font-size: 15px; color: #adadad">Client : {{ findClientPrenom(item.id_client) }}
                {{ findClientName(item.id_client) }}
              </div>
              <div style="margin-left: auto">Créé le :</div>&nbsp;
              <div class="date_container">{{ item.date_commande }}</div>&nbsp;
              <div>Payé le :</div>&nbsp;
              <div class="date_container">{{ item.date_paiement }}</div>
            </div>
            <div class="item">
              <!--              <div style="font-size: 20px; font-weight: bold">{{ item.is_payed }}</div>&nbsp;-->
              <div style="font-size: 20px"> Quantité : {{ item.produits_contrat.length }}</div>
            </div>
          </div>
          <div class="actions_item">
            <button v-if="!item.showProduitsContrat" @click="openEditor(item)" class="infobox_btn_view"><i
                class="fas fa-eye"></i></button>
            <button v-if="item.showProduitsContrat" @click="openEditor(item)" style="background: #75559d !important;"
                    class="infobox_btn_view"><i class="fas fa-eye"></i></button>
            <button @click="deleteElement(item.id)" class="infobox_btn_supp" style="margin-left: auto"><i
                class="fa-solid fa-xmark"></i></button>
            <div v-if="item.showProduitsContrat">
              <div class="infobox">
                <div style="display: flex; align-items: center; margin-bottom: 1rem">
                  <div>Détails du contrat N°&nbsp;</div>
                  <div class="date_container" style="border: 2px solid #af3232; padding: 0.2rem 0.5rem">{{ item.id }}
                  </div>
                  <button @click="closeEditor(item)" class="infobox_btn_close" style="margin-left: 1rem"><i
                      class="fa-solid fa-xmark"></i></button>
                </div>
                <div style="display: flex; width: 100%; margin-bottom: 0.5rem">
                  <div class="left_data_infos" style="color: #7a7a7a">Client</div>
                  <div class="right_data_infos">{{ findClientPrenom(item.id_client) }}
                    {{ findClientName(item.id_client) }}
                  </div>
                </div>
                <div style="display: flex; width: 100%; margin-bottom: 0.5rem">
                  <div class="left_data_infos" style="color: #7a7a7a">Date de la commande</div>
                  <input type="date" style="width: 50%" v-model="item.date_commande"/>
                </div>
                <div v-if="item.date_paiement" style="display: flex; width: 100%; margin-bottom: 0.5rem">
                  <div class="left_data_infos" style="color: #7a7a7a">Date du paiement</div>
                  <input type="date" style="width: 50%" v-model="item.date_paiement"/>
                </div>
                <div
                    style="display: flex; flex-direction: column;align-items: center;justify-content: center; width: 100%; margin-bottom: 0.5rem">
                  <div style="display:flex; justify-content: center; width:100%;font-weight: 700; color: #b2b2b2">
                    Produits
                  </div>
                  <span class="span_produits_contrat"></span>

                  <div style="display: flex; align-items: center;justify-content: center; width: 100%; flex-wrap: wrap">
                    <div v-for="produitContrat in item.produits_contrat">
                      <div class="product_contrat">
                        <div>{{ findProduitNom(produitContrat.id_product) }}</div>
                        <div>{{ findProduitPrix(produitContrat.id_product) }} €</div>
                        <div style="font-size: 15px; color: #ff9595">Qté : {{ produitContrat.quantity }}</div>
                      </div>
                    </div>
                  </div>
                  <div>Total de la commande : {{ calculTotal(item.id) }}€</div>

                </div>
                <button @click="closeAndSave(item)" class="infobox_btn_save">
                  Sauvegarder
                </button>
              </div>
              <div class="allPageClick" @click="closeAndSaveAjout(item)"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Contrats',
  data() {
    return {
      id_client: '',
      produits_contrat: [],
      date_commande: this.currentDate(),
      date_paiement: this.currentDate(),
      is_payed: false,
      showAjout: false,
      showProduitsContrat: false,
    }
  },
  props: {
    database: "",
  },

  methods: {
    openEditor(item) {
      item.showProduitsContrat = true;
    },
    closeEditor(item) {
      item.showProduitsContrat = false;
    },
    closeAndSave(item) {
      item.showProduitsContrat = false;
      this.$emit('UpdateDB');
    },
    openAjout() {
      this.showAjout = true
    },
    closeAjout() {
      this.showAjout = false;
    },
    closeAndSaveAjout() {
      if (this.date_commande !== '' ) {
        this.showAjout = false;
        this.addProduit()
        this.date_commande = '';
        this.date_paiement = '';
      } else {
        alert('Veuillez remplir tous les champs')
      }
    },
    openShowProduitsContrat() {
      this.showProduitsContrat = true;
    },
    closeShowProduitsContrat() {
      this.showProduitsContrat = false;
    },
    addProduit() {
      this.database.contrats.push({
        id: this.generateIdContrat().toString(),
        // showOptions: false,
        id_client: this.id_client,
        produits_contrat: this.produits_contrat,
        date_commande: this.date_commande.toString(),
        date_paiement: this.date_paiement.toString(),
        is_payed: false,
      });
      this.$emit('UpdateDB');
    },
    deleteElement(idContrat) {
      // this.database.produits.splice(this.database.produits.findIndex((item)=>item.id===item),1)
      this.database.contrats = this.database.contrats.filter(item => item.id != idContrat);
      this.$emit('UpdateDB');
    },
    generateIdContrat(longeurID = 8) {
      let result = '';
      let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let charactersLength = characters.length;
      let i;
      for (i = 0; i < longeurID; i++) {
        result = result + characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
      //  Probabilité que les deux id soient identiques : 1 / 6000 milliards
      //  calcul : 25 (longueur de l'id) puissance 86 (nombre de caractères possibles)
    },
    findClientName(id) {
      return this.database.clients.find(item => item.id === id).nom;
    },
    findClientPrenom(id) {
      return this.database.clients.find(item => item.id === id).prenom;
    },
    findProduitNom(id) {
      return this.database.produits.find(item => item.id === id).nom;
    },
    findProduitPrix(id) {
      let prix = this.database.produits.find(item => item.id === id).prix;
      return parseInt(prix);
    },
    calculTotal(id) {
      let total = 0;
      let i;
      for (i = 0; i < this.database.contrats.find(item => item.id === id).produits_contrat.length; i++) {
        total += this.database.contrats.find(item => item.id === id).produits_contrat[i].quantity *
            this.findProduitPrix(this.database.contrats.find(item => item.id === id).produits_contrat[i].id_product);
      }
      return total;
    },
    currentDate() {
      // const current = new Date();
      // const ajdDate = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
      const ajdDate = new Date().toJSON().slice(0,10);
      return ajdDate.toString();
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
  flex-direction: column;
  width: 100%;
  align-items: center;
  min-height: 15%;
  padding: 0.5rem 0;
  justify-content: center;
}

.content {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
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

.ajout_item {
  display: flex;
}

.inputsecours {
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  background-color: #505050;
  border: 2px solid #505050;
  border-radius: 5px;
  color: white;
}

.span_produits_contrat {
  height: 0.1rem;
  width: 10rem;
  background-color: #7a7a7a;
  border-radius: 99px;
  margin: 0.2rem 0 0.2rem 0;
}

.product_contrat {
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  background-color: #505050;
  border-radius: 0.5rem;
  min-width: 5rem;
  padding: 0.5rem;
}
</style>