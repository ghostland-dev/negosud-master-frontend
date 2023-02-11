<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <nav
      class="navbar has-background-white-ter"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item"> Accueil </a>

          <a class="navbar-item"> Boutique </a>

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
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>S'inscrire</strong>
              </a>
              <a class="button is-white"> Espace Client</a>
              <a :v-if="isConntected" class="button is-danger">Déconnexion</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script></script>

<style lang="scss" scoped></style>
