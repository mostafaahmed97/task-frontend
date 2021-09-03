<template>
  <div class="cart-item">
    <div class="item-img">
      <img :src="item.product.img" alt="" />
    </div>

    <div class="item-info">
      <div class="name">{{ item.product.name }}</div>
      <div class="description">{{ item.product.description }}</div>
    </div>

    <div class="item-price">${{ item.product.price }}</div>

    <div class="item-qty-ctrl">
      <input class="minus" value="-" type="button" @click="dec" />
      <input class="qty" type="text" :value="item.quantity" disabled size="2" />
      <input class="plus" value="+" type="button" @click="inc" />
    </div>

    <div class="item-loading" v-show="isLoading">
      <LoadingCubes :height="40" :width="40" />
    </div>
  </div>
</template>

<script>
import LoadingCubes from "../common/LoadingCubes.vue";

export default {
  name: "CartItem",
  components: { LoadingCubes },
  props: { item: Object },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    async inc() {
      try {
        this.isLoading = true;
        let quantity = this.item.quantity + 1;
        await this.$store.dispatch("cart/update", {
          itemId: this.item.id,
          quantity,
        });
      } finally {
        this.isLoading = false;
      }
    },
    async dec() {
      try {
        this.isLoading = true;
        let quantity = this.item.quantity - 1;
        if (quantity <= 0) this.$store.dispatch("cart/remove", this.item.id);
        else
          this.$store.dispatch("cart/update", {
            itemId: this.item.id,
            quantity,
          });
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style></style>
