<template>
  <div class="product-showcase-wrapper cart-section">
    <div class="section-title">Products</div>
    <div class="products-carousel" v-if="availableProducts.length">
      <ProductCard
        v-for="product in availableProducts"
        :key="product.id"
        :product="product"
      />
    </div>
    <div v-else>
      No products to show
    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "ProductShowcase",
  components: { ProductCard },
  computed: mapGetters("cart", ["availableProducts"]),
  mounted() {
    this.$store.dispatch("cart/fetchAvailableProducts");
  },
};
</script>

<style></style>
