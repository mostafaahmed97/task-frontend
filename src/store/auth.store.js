import authApi from "../api/auth.api";
import { setToken } from "../api/httpClient";

export default {
  namespaced: true,
  state: {
    token: "",
    userData: {},
  },
  getters: {
    isLoggedIn: (state) => (state.token ? true : false),
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_USER_DATA(state, payload) {
      state.userData = payload;
    },
  },
  actions: {
    async login({ commit }, payload) {
      try {
        let response = await authApi.postLogin(payload.email, payload.password);
        setToken(response.data.token);
        commit("SET_TOKEN", response.data.token);
        commit("SET_USER_DATA", response.data.user);
      } catch (e) {
        throw e.response.data.error;
      }
    },
  },
};
