<template>
  <div class="coupon-ctrls">
    <div class="coupon-input">
      <input type="text" placeholder="COUPON CODE" />
      <button class="btn">Apply</button>
    </div>

    <div class="coupon-hint">
      Test coupon codes: <br />
      SUMMER15 (fixed amount)<br />
      SCHOOLBREAK (percentage)<br />
      WINTER30 (expired code)<br />
    </div>

    <div class="success">Coupon applied</div>
    <div class="error">Error</div>
  </div>
</template>

<script>
export default {
  name: "CouponControls",
};
</script>

<style></style>
