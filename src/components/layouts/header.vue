<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <nav class="navbar has-background-white-ter" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="/public/logo.svg" class="logo-resized" />
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item"> Accueil </a>

          <a class="navbar-item"> Boutique </a>
          <a class="navbar-item"> Chercher </a>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> Produits </a>
            <div class="navbar-dropdown">
              <a class="navbar-item"> Vin rouge </a>
              <a class="navbar-item"> Vin blanc </a>
              <a class="navbar-item"> Vin Alco </a>
              <hr class="navbar-divider" />
              <a class="navbar-item"> Categories </a>
            </div>
          </div>
          <a class="button is-warning m-3"> <i class="fa fa-pen"></i> chercher</a>

        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <template v-if="props.isConnected">
                <router-link @click="deconnexionBtn" class="button is-danger"
                  to="/auth/v1/connexion">Déconnexion</router-link>
              </template>
              <template v-if="!props.isConnected">
                <router-link class="button is-primary" to="/auth/v1/inscription">Inscription</router-link>
                <router-link class="button is-white is-normal" to="/auth/v1/connexion">Espace Client</router-link>
              </template>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    deconnexionBtn() {
      this.props.isConnected = false;
    },
  },
  name: "headerView",
  data() {
    return {
      props: {
        isConnected: {
          type: Boolean,
          default: false,
          required: true,
        },
      },
    };
  },
};
</script>

<style scoped>
.logo-resized {
  height: 3em !important;
}

.navbar-item img {
  max-height: 2.75rem !important;
}

 navbar-item,
 .navbar-link {
   color: #4b407a !important;
   text-decoration: none !important;
   font-family: comfortaa;
 }

 align-self:hover {
   text-decoration: none !important;
 }

.navbar-dropdown .navbar-item {
  padding: 1em 4em;
}
</style>
