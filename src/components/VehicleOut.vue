<template>
  <div class="gnr_" v-if="this.$store.getters.data">
    <div class="t01">
      <div class="t02r">{{amountTitle2.title5}}</div>
    </div>
    <div class="ggd">
      <div
        class="ggdb"
        v-for="(vout, index) in this.$store.getters.data.vehicleOut"
        :key="index"
        :style="[vout.vehicleCnt == 0 ? {opacity: 0.3} : '']"
        v-if="vout1 == true && vout.vehicleCnt >= 0 || vout1 == false && vout.vehicleCnt > 0"
      >
        <div
          class="grx"
          :title="`${vout.vehicleType}: ${vout.vehicleCnt} ຄັນ, ຄ່າທຳນຽມ: ${num(vout.fees).format('0,0')} ກີບ`"
        >
          <div class="owel">
            <div class="wps">
              <div class="hsdf">
                <div class="txhl">{{ vout.vehicleType }}</div>
              </div>
              <div class="hsdf">
                <div class="txb">
                  <div class="ti1">{{ amountTitle.fees }}:</div>
                  <div class="ti2">{{ num(vout.fees).format("0,0") }}</div>
                </div>
              </div>
              <div class="_hsdf">
                <div class="_owel">
                  <div class="ico revs">
                    <i :class="vout.icon"></i>
                  </div>
                </div>
                <div class="pwl">{{ vout.vehicleCnt }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import numeral from "numeral";
import jdata from "@/views/data.json";
export default {
  props: {
    oHeight: null
  },
  data() {
    return {
      num: numeral,
      amountTitle: jdata.amountTitle,
      amountTitle2: jdata.amountTitle2,
      vout1: true
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 900) {
        this.vout1 = false;
      } else {
        this.vout1 = true;
      }
    });
    if (window.innerWidth < 900) {
      this.vout1 = false;
    } else {
      this.vout1 = true;
    }
  }
};
</script>

<style lang="scss">
</style>
