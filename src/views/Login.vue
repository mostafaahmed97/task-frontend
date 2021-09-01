<template>
  <div class="login-page">
    <div class="login-form-wrapper">
      <div class="login-title">Login</div>

      <form class="login-form" @submit="handleLogin">
        <label>
          Email
          <input
            class="form-text"
            type="email"
            required
            placeholder="Type your email"
            v-model="email"
          />
        </label>
        <label>
          Password
          <input
            class="form-text"
            type="password"
            required
            placeholder="Type your password"
            v-model="password"
          />
        </label>

        <input
          type="submit"
          value="LOGIN"
          class="login-btn"
          :disabled="isLoading"
        />

        <LoadingCubes v-show="isLoading" :width="40" :height="40" />

        <div class="login-error" v-show="error">
          {{ error }}
        </div>
      </form>

      <div class="login-hint">
        Testing accounts are <br />
        a@a <br />
        b@b <br />
        c@c <br />
        Password : 123456789
      </div>
    </div>
  </div>
</template>

<script>
import LoadingCubes from "@/components/common/LoadingCubes.vue";

export default {
  name: "Login",
  components: { LoadingCubes },
  data() {
    return {
      email: "",
      password: "",
      isLoading: false,
      error: "",
    };
  },
  methods: {
    async handleLogin(e) {
      try {
        e.preventDefault();
        this.isLoading = true;
        this.error = "";
        await this.$store.dispatch("auth/login", {
          email: this.email,
          password: this.password,
        });
        this.$router.push({ name: "Cart" });
      } catch (err) {
        this.error = err;
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/pages/login.scss";
</style>
