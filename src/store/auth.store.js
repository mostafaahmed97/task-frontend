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
    SET_TOKEN() {},
    SET_USER_DATA() {},
  },
  actions: {
    async login({ commit }, payload) {
      try {
        let data = await authApi.postLogin(payload.email, payload.password);
        setToken(data.token);
        commit("SET_TOKEN", data.token);
        commit("SET_USER_DATA", data.user);
      } catch (e) {
        throw e.response.data.error;
      }
    },
  },
};
