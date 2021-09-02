<template>
  <div class="product-showcase-wrapper cart-section">
    <div class="section-title">Products</div>
    <div class="products-carousel">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";

export default {
  name: "ProductShowcase",
  components: { ProductCard },
};
</script>

<style></style>
