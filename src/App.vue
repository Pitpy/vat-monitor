<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
body {
  font-family: "Segoe UI";
  margin: 0;
  overflow: scroll;
  background: #f7fafc;
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
