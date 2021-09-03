import CartApi from "../api/cart.api";

export default {
  namespaced: true,
  state: {
    cartItems: [],
    products: [],
    coupon: {},
  },
  getters: {
    cartProductIds: (state) => state.cartItems.map((item) => item.product.id),
    availableProducts: (state, getters) =>
      state.products.filter(
        (product) => !getters.cartProductIds.includes(product.id)
      ),
    appliedCoupon: (state) => (state.coupon ? state.coupon : 0),
    priceSum: (state) => {
      let sum = 0;
      for (var item of state.cartItems)
        sum += item.quantity * item.product.price;
      return sum;
    },
    discountAmount: (state, getters) => {
      if (!state.coupon) return 0;
      if (state.coupon.type == "fixed") return state.coupon.amount;
      return (state.coupon.amount / 100) * getters.priceSum;
    },
    totalPrice: (state, getters) =>
      getters.priceSum - getters.discountAmount > 0
        ? getters.priceSum - getters.discountAmount
        : 0,
  },
  mutations: {
    SET_PRODUCTS(state, payload) {
      state.products = payload;
    },
    SET_COUPON(state, payload) {
      state.coupon = payload;
    },
    SET_ITEMS(state, payload) {
      state.cartItems = payload;
    },
    UPDATE_ITEM(state, payload) {
      let item = state.cartItems.find((item) => item.id == payload.itemId);
      item.quantity = payload.quantity;
    },
    REMOVE_ITEM(state, itemId) {
      state.cartItems = state.cartItems.filter((item) => item.id != itemId);
    },
    ADD_ITEM(state, payload) {
      state.cartItems.push(payload);
    },
  },
  actions: {
    async fetchAvailableProducts({ commit }) {
      try {
        let response = await CartApi.getAvailableProducts();
        commit("SET_PRODUCTS", response.data);
      } catch (e) {
        console.log(e.response);
      }
    },
    async fetchContents({ commit }) {
      try {
        let response = await CartApi.getContents();
        commit("SET_ITEMS", response.data.cartitems);
        commit("SET_COUPON", response.data.coupon);
      } catch (e) {
        console.log(e.response);
      }
    },
    async add({ commit }, productId) {
      try {
        let response = await CartApi.add(productId);
        commit("ADD_ITEM", response.data);
      } catch (e) {
        console.log(e.response);
      }
    },
    async update({ commit }, payload) {
      try {
        await CartApi.update(payload.itemId, payload.quantity);
        commit("UPDATE_ITEM", {
          itemId: payload.itemId,
          quantity: payload.quantity,
        });
      } catch (e) {
        console.log(e.response);
      }
    },
    async remove({ commit }, itemId) {
      try {
        await CartApi.remove(itemId);
        commit("REMOVE_ITEM", itemId);
      } catch (e) {
        console.log(e.response);
      }
    },
    async applyCode({ commit }, code) {
      return new Promise((resolve, reject) => {
        console.log("code form promise ", code);
        CartApi.applyCode(code)
          .then((response) => {
            commit("SET_COUPON", response.data);
            resolve();
          })
          .catch((e) => reject(e.response.data.error));
      });
    },
    async removeCode({ commit }) {
      try {
        await CartApi.removeCode();
        commit("SET_COUPON", null);
      } catch (e) {
        console.log(e.response);
        throw e.response;
      }
    },
  },
};
