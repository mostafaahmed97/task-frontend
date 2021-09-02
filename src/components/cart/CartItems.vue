<template>
  <div class="cart-items-wrapper">
    <div class="section-title">Cart</div>
    <div class="cart-items">
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";

export default {
  name: "CartItems",
  components: { CartItem },
};
</script>

<style></style>
