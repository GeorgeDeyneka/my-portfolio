import { createRouter, createWebHistory } from "vue-router";
import MainView from "@/views/MainView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MainView,
      children: [
        {
          path: "",
          name: "about",
          component: () => import("@/views/AboutView.vue"),
          exact: true,
        },
        {
          path: "/projects",
          name: "projects",
          component: () => import("@/views/ProjectsView.vue"),
        },
        {
          path: "/projects/:id",
          name: "project",
          component: () => import("@/views/PrDetailsView.vue"),
        },
        {
          path: "/contacts",
          name: "contacts",
          component: () => import("@/views/ContactsView.vue"),
        },
        {
          path: "/stack",
          name: "stack",
          component: () => import("@/views/StackView.vue"),
        },
        {
          path: "/:catchAll(.*)",
          redirect: "/not-found",
        },
        {
          path: "/not-found",
          name: "not-found",
          component: () => import("@/views/ErrorView.vue"),
        },
      ],
    },
  ],
});

export default router;
