<template>
  <div class="coupon-ctrls">
    <div class="coupon-input" v-if="!appliedCoupon">
      <input type="text" placeholder="COUPON CODE" v-model="code" />
      <button class="btn" @click="apply">Apply</button>
    </div>
    <div class="coupon-input" v-else>
      <input type="text" :placeholder="appliedCoupon.code" disabled />
      <button class="btn" @click="remove">Remove</button>
    </div>

    <div class="error" v-show="error">{{ error }}</div>

    <div class="coupon-hint">
      Test coupon codes: <br />
      SUMMER15 (fixed amount)<br />
      SCHOOLBREAK (percentage)<br />
      WINTER30 (expired code)<br />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CouponControls",
  computed: mapGetters("cart", ["appliedCoupon"]),
  data() {
    return {
      error: "",
      code: "",
    };
  },
  methods: {
    async apply() {
      try {
        if (!this.code.trim()) return;
        this.error = "";
        await this.$store.dispatch("cart/applyCode", this.code.trim());
      } catch (e) {
        this.error = e;
      }
    },
    async remove() {
      try {
        this.error = "";
        await this.$store.dispatch("cart/removeCode");
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style></style>
