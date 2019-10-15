<template>
  <div class="dls" v-if="this.$store.getters.data">
    <div class="tlt_">{{ amountTitle.title2 }} : {{sumDate}}</div>
    <div class="_cnt">
      <div class="cntl">{{ amountTitle.vehicle }}:</div>
      <div
        class="cnts"
      >{{ num( this.$store.getters.data.inOutSummary.monthlyVehicle ).format("0,0") }}</div>
    </div>
    <div class="_cnt">
      <div class="cntl">{{ amountTitle.passenger }}:</div>
      <div
        class="cnts"
      >{{ num( this.$store.getters.data.inOutSummary.monthlyPerson ).format("0,0") }}</div>
    </div>
    <div class="_cnt">
      <div class="cntl">{{ amountTitle.fees }}:</div>
      <div class="cnts">{{ num( this.$store.getters.data.inOutSummary.monthlyFees ).format("0,0") }}</div>
    </div>
    <div class="_cnt">
      <div class="cntl">{{ amountTitle.otfees }}:</div>
      <div
        class="cnts"
      >{{ num( this.$store.getters.data.inOutSummary.monthlyOtFees ).format("0,0") }}</div>
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
