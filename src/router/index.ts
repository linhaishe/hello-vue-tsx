import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Index from "../pages/Index";

Vue.use(VueRouter);

// const routes: Array<RouteConfig> = [];

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "index",
    component: Index,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/Login"),
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
