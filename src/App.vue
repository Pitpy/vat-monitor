<template>
  <div id="app">
    <transition name="bounce">
      <div class="loading" v-if="!this.$store.state.data">
        <loading></loading>
      </div>
    </transition>
    <header>
      <app-header></app-header>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
const Loading = () => import("@/components/Loading.vue");
import AppHeader from "@/views/header/index.vue";
export default {
  components: {
    AppHeader,
    Loading
  },
  data() {
    return {
      loadPage: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.loadPage = false;
    }, 2000);
  }
};
</script>

<style lang="scss">
body {
  font-family: "Segoe UI";
  margin: 0;
  overflow: scroll;
  background: #0e0d0d;
  @media screen and (min-width: 800px) {
    overflow: hidden;
  }
}
header {
  max-height: 65px;
  position: sticky;
  top: 0;
  z-index: 1000;
  background: #0e0d0d;
  @media screen and (min-width: 800px) {
    position: relative;
    top: 0;
    z-index: 1000;
  }
}
.loading {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: #0e0d0d;
  z-index: 100000;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
