import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../layouts/DefaultLayout.vue"),
      children: [
        {
          path: "",
          component: HomeView
        },
        {
          path: "hobbies",
          component: () => import("../views/DiaryView.vue")
        }
      ]
    }
  ]
});

export default router;