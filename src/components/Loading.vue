<template>
  <div class="p-loading">
    <atom-spinner :animation-duration="1000" :size="150" color="#ff1d5e" />
    <div class="text">
      <span>Now loading...</span>
    </div>
  </div>
</template>
<script>
import { AtomSpinner } from "epic-spinners";
export default {
  components: {
    AtomSpinner
  }
};
</script>

<style scoped>
.p-loading {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
}
.text {
  margin-top: 5rem;
  color: white;
  font-size: 1.2rem;
}
</style>
