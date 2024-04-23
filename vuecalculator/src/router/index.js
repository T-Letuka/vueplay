import { createRouter, createWebHistory } from "vue-router";
import Welcome from "@/components/Welcome.vue";
import Login from "@/components/Login.vue";
import Signin from "@/components/Signup.vue";
import Love from "@/components/Love.vue";
import Results from "@/components/Results.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "welcome",
      component: Welcome,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/signup",
      name: "signup",
      component: Signin,
    },
    {
      path: "/love",
      name: "love",
      component: Love,
    },
    {
      path: "/results",
      name: "results",
      component: Results,
    },
  ],
});

export default router;
