import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      children: [
        {
          path: "",
          name: "about",
          component: () => import("../views/AboutView.vue"),
          exact: true
        },
        {
          path: "/projects",
          name: "projects",
          component: () => import("../views/ProjectsView.vue"),
        },
        {
          path: "/contacts",
          name: "contacts",
          component: () => import("../views/ContactsView.vue"),
        },
      ],
    },
  ],
});

export default router;
