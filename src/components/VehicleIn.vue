<template>
  <div class="gnr_" v-if="this.$store.getters.data">
    <div class="t01">
      <div class="t02l">{{amountTitle2.title4}}</div>
    </div>
    <div class="ggd">
      <div
        class="ggdb"
        v-for="(vin, index) in this.$store.getters.data.vehicleIn"
        :key="index"
        :style="[vin.vehicleCnt == 0 ? {opacity: 0.3} : '']"
        v-if="vin1 == true && vin.vehicleCnt >= 0 || vin1 == false && vin.vehicleCnt > 0"
      >
        <div
          class="grx"
          :title="`${vin.vehicleType}: ${vin.vehicleCnt} ຄັນ, ຄ່າທຳນຽມ: ${num(vin.fees).format('0,0')} ກີບ`"
        >
          <div class="owel">
            <div class="wps">
              <div class="hsdf">
                {{ getIndex(index + 1) }}
                <div class="txhl">{{ vin.vehicleType }}</div>
              </div>
              <div class="hsdf">
                <div class="txb">
                  <div class="ti1">{{ amountTitle.fees }}:</div>
                  <div class="ti2">{{ num(vin.fees).format("0,0") }}</div>
                </div>
              </div>
              <div class="_hsdf">
                <div class="_owel">
                  <div class="ico">
                    <i :class="vin.icon"></i>
                  </div>
                </div>
                <div class="pwl">{{ vin.vehicleCnt }}</div>
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
    iHeight: null
  },
  data() {
    return {
      num: numeral,
      amountTitle: jdata.amountTitle,
      amountTitle2: jdata.amountTitle2,
      vin1: true
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 900) {
        this.vin1 = false;
      } else {
        this.vin1 = true;
      }
    });
    if (window.innerWidth < 900) {
      this.vin1 = false;
    } else {
      this.vin1 = true;
    }
  },
  methods: {
    getIndex(e) {}
  }
};
</script>
 