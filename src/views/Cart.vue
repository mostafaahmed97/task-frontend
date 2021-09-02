<template>
  <div class="cart-page">
    <ProductShowcase />

    <div class="cart-components-wrapper">
      <CartItems />
      <OrderSummary />
    </div>
  </div>
</template>

<script>
import ProductShowcase from "@/components/cart/ProductShowcase.vue";
import CartItems from "@/components/cart/CartItems.vue";
import OrderSummary from "@/components/cart/OrderSummary.vue";

export default {
  name: "Cart",
  components: { ProductShowcase, CartItems, OrderSummary },
};
</script>

<style lang="scss">
@import "@/assets/css/pages/cart.scss";
</style>
