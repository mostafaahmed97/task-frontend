import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth.store";
import cart from "./cart.store";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    cart,
  },
});
