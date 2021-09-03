<template>
  <div class="cart-items-wrapper">
    <div class="section-title">Cart</div>
    <div class="cart-items">
      <CartItem v-for="item in cartItems" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
import { mapState } from "vuex";

export default {
  name: "CartItems",
  components: { CartItem },
  computed: mapState("cart", ["cartItems"]),
  mounted() {
    this.$store.dispatch("cart/fetchContents");
  },
};
</script>

<style></style>
