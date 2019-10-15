<template>
  <div class="dls" v-if="this.$store.getters.data">
    <div class="tlt_">{{ amountTitle.title3 }} : {{sumDate}}</div>
    <div class="_cnt">
      <div class="cntl">{{ amountTitle.vehicle }}:</div>
      <div
        class="cnts"
      >{{ num( this.$store.getters.data.inOutSummary.yearlyVehicle ).format("0,0") }}</div>
    </div>
    <div class="_cnt">
      <div class="cntl">{{ amountTitle.passenger }}:</div>
      <div
        class="cnts"
      >{{ num( this.$store.getters.data.inOutSummary.yearlyPerson ).format("0,0") }}</div>
    </div>
    <div class="_cnt">
      <div class="cntl">{{ amountTitle.fees }}:</div>
      <div class="cnts">{{ num( this.$store.getters.data.inOutSummary.yearlyFees).format("0,0") }}</div>
    </div>
    <div class="_cnt">
      <div class="cntl">{{ amountTitle.otfees }}:</div>
      <div class="cnts">{{ num( this.$store.getters.data.inOutSummary.yearlyOtFees).format("0,0") }}</div>
    </div>
  </div>
</template>

<script>
import numeral from "numeral";
import data from "@/views/data.json";
export default {
  props: ["sumDate"],
  data() {
    return {
      num: numeral,
      amountTitle: data.amountTitle,
      amountTitle2: data.amountTitle2
    };
  }
};
</script>

<style lang="scss">
</style>
