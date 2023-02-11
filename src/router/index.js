import { createRouter, createWebHistory } from "vue-router";
import accueil from "../views/accueil.vue";
import connexionView from "@/views/auth/authentification/connexion.vue";
import inscriptionView from "@/views/auth/authentification/inscription.vue";
import adminView from "@/views/auth/profils/adminisrateur.vue";
import commercialView from "@/views/auth/profils/commercial.vue";
import clientView from "@/views/auth/profils/client.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "accueil",
      component: accueil,
    },
    {
      path: "/auth/v1/connexion",
      name: "connexionView",
      component: connexionView,
    },
    {
      path: "/auth/v1/inscription",
      name: "inscriptionView",
      component: inscriptionView,
    },
    {
      path: "/auth/v1/adminisrateur",
      name: "adminView",
      component: adminView,
    },
    {
      path: "/auth/v1/commercial",
      name: "commercialView",
      component: commercialView,
    },
    {
      path: "/auth/v1/client",
      name: "clientView",
      component: clientView,
    },
  ],
});

export default router;
