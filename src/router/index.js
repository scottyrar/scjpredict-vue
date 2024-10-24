import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/what-is-cancer",
      name: "whatcancer",
      component: () => import("../views/WhatCancerView.vue"),
    },
    {
      path: "/prevent-cancer",
      name: "preventcancer",
      component: () => import("../views/PreventCancerView.vue"),
    },
    {
      path: "/have-cancer",
      name: "havecancer",
      component: () => import("../views/HaveCancerView.vue"),
    },
    {
      path: "/predict-cancer",
      name: "predictcancer",
      component: () => import("../views/PredictCancerView.vue"),
    },
  ],
});

router.afterEach((to, from) => {
  window.scrollTo(0, 0);
  gtag("js", new Date());

  gtag("config", "G-ZM40CFV5G8", {
    send_page_view: false,
  });
  if (to.name !== from.name) {
    gtag("event", "page_view", {
      page_title: to.name,
      page_path: to.path,
    });
  }
});

export default router;
