<template>
  <div class="order-summary-wrapper">
    <div class="section-title">Order</div>

    <div class="order-details">
      <CouponControls />

      <div class="order-data">
        <div class="line" v-show="discountAmount">
          <h5 class="title">Before discount</h5>
          <div class="data">${{ priceSum }}</div>
        </div>

        <div class="line" v-show="discountAmount">
          <h5 class="title">You save</h5>
          <div class="data">${{ discountAmount }} {{ formattedDiscount }}</div>
        </div>

        <div class="line">
          <h5 class="title">Total amount</h5>
          <div class="data">${{ totalPrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CouponControls from "./CouponControls.vue";
import { mapGetters } from "vuex";

export default {
  name: "OrderSummary",
  components: { CouponControls },
  computed: {
    ...mapGetters("cart", [
      "appliedCoupon",
      "discountAmount",
      "totalPrice",
      "priceSum",
    ]),
    formattedDiscount() {
      if (this.appliedCoupon.type == "percent")
        return ` (${this.appliedCoupon.amount} %)`;
      return "";
    },
  },
};
</script>

<style></style>
