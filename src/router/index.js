import Vue from "vue";
import VueRouter from "vue-router";
import anamenu from "@/views/anamenu.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Ana Menu",
    component: anamenu,
  },
  {
    path: "/urunler",
    name: "Ürünler",
    component: () => import("@/views/urunler.vue"),
  },
  {
    path: "/ayarlar",
    name: "Ayarlar",
    component: () => import("@/views/ayarlar.vue"),
  },
  {
    path: "/yardim",
    name: "Yardım",
    component: () => import("@/views/yardim.vue"),
  },
  {
    path: "/hakkinda",
    name: "Uygulama Hakkında",
    component: () => import("@/views/hakkinda.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
