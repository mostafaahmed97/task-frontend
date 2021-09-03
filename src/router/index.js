import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Cart from "../views/Cart.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters["auth/isLoggedIn"])
    next({ name: "Login" });
  else next();
});

export default router;
