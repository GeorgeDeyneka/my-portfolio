import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";

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
          component: () => import("../pages/about/AboutView.vue"),
          exact: true,
        },
        {
          path: "/projects",
          name: "projects",
          component: () => import("../pages/projects/ProjectsView.vue"),
        },
        {
          path: "/projects/:id",
          name: "project",
          component: () => import("../pages/details/ProjectDetailsView.vue"),
        },
        {
          path: "/contacts",
          name: "contacts",
          component: () => import("../pages/contacts/ContactsView.vue"),
        },
        {
          path: "/stack",
          name: "stack",
          component: () => import("../pages/technologies/TechnologiesView.vue"),
        },
        {
          path: "/:catchAll(.*)",
          redirect: "/404-page",
        },
        {
          path: "/404-page",
          name: "404-page",
          component: () => import("../pages/404/404-PageView.vue"),
        },
      ],
    },
  ],
});

export default router;
