<template>
  <div class="order-summary-wrapper">
    <div class="section-title">Order</div>

    <div class="order-details">
      <CouponControls />

      <div class="order-data">
        <div class="line">
          <h5 class="title">You save</h5>
          <div class="data">$25</div>
        </div>
        <div class="line">
          <h5 class="title">Total amount</h5>
          <div class="data">$132</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CouponControls from "./CouponControls.vue";

export default {
  name: "OrderSummary",
  components: { CouponControls },
};
</script>

<style></style>
