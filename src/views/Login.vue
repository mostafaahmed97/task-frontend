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

        <input type="submit" value="LOGIN" class="login-btn" />
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
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleLogin(e) {
      e.preventDefault();
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/pages/login.scss";
</style>
