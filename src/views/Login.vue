<template>
  <div id="login">
    <transition enter-active-class="animated fadeIn">
      <div class="_container" v-if="display">
        <div class="login-box">
          <div class="logo-box">
            <img src="img/custom.png" alt srcset />
          </div>
          <form class="control-box" @submit.prevent="go">
            <div
              :class="['welcome', !this.$store.state.loginStatus.status ? 'failed' : '']"
            >{{this.$store.state.loginStatus.text}}</div>
            <div :class="['control', $v.form.user.$error ? 'err' : '']">
              <label for="user">User</label>
              <input
                type="text"
                id="user"
                placeholder="Enter username"
                v-model.trim="form.user"
                autofocus
              />
              <span class="required" v-if="$v.form.user.$error">Username cannot be empty.</span>
            </div>
            <div :class="['control', $v.form.password.$error ? 'err' : '']">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                v-model.trim="form.password"
              />
              <span class="required" v-if="$v.form.password.$error">Password cannot be empty.</span>
            </div>
            <div class="button-box">
              <button class="pp-btn" type="submit" role="button">log in</button>
            </div>
          </form>
        </div>
      </div>
    </transition>
    <span class="cp-right">Copyright &#9400; 2019 | BCEL BANK</span>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import code from "@/helper/father.js";

export default {
  data() {
    return {
      display: false,
      form: {
        user: "",
        password: "",
        agen: "",
        location: ""
      }
    };
  },
  validations: {
    form: {
      user: {
        required
      },
      password: {
        required
      }
    }
  },
  mounted() {
    this.form.agen = code.enC(this.device());
    // const to = code.to(this.form.agen);
    // console.log("to", to);
    // const from = code.from(to);
    // console.log("from", from);

    navigator.geolocation.getCurrentPosition(e => {
      this.form.location = `${e.coords.latitude},${e.coords.longitude}`;
    });
    setTimeout(() => {
      this.display = true;
    }, 500);
  },
  methods: {
    go() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$store.dispatch("auth", this.form);
      }
    },
    device() {
      if (navigator.userAgent.match(/Linux/i)) return "Linux";
      else if (navigator.userAgent.match(/Windows/i)) return "Windows";
      else if (navigator.userAgent.match(/Android/i)) return "Android";
      else if (navigator.userAgent.match(/iPhone/i)) return "iPhone";
      else if (navigator.userAgent.match(/iPad/i)) return "iPad";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/login.scss";
</style>