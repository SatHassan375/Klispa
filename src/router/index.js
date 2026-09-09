import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Home2 from "../views/Home-v2.vue";
import Home3 from "../views/Home-v3.vue";
import About from "../views/About.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/about", name: "about", component: About },
    { path: "/home-v2", name: "home-v2", component: Home2 },
    { path: "/home-v3", name: "home-v3", component: Home3 },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
