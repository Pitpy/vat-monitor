<template>
  <div class="bxn" v-if="this.$store.getters.data">
    <div class="nbw">
      <div class="ttitle">{{ amountTitle2.title1 }}</div>
      <div class="_nso">
        <div class="wlx">
          <div class="_tx">
            <div class="_txin">{{ amountTitle2.cntPassport }}:</div>
            <div class="_txinn">{{ this.$store.getters.data.nationalIn.cntPassport }}</div>
          </div>
          <div class="_tx">
            <div class="_txin">{{ amountTitle2.cntborderPass }}:</div>
            <div class="_txinn">{{ this.$store.getters.data.nationalIn.cntborderPass }}</div>
          </div>
          <div class="_tx">
            <div class="_txin">{{ amountTitle2.laoPassenger }}:</div>
            <div class="_txinn">{{ this.$store.getters.data.nationalIn.laoPassenger }}</div>
          </div>
          <div class="_tx">
            <div class="_txin">{{ amountTitle2.foreignerPassenger }}:</div>
            <div class="_txinn">{{ this.$store.getters.data.nationalIn.foreignerPassenger }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="nbw">
      <div class="ttitle">{{ amountTitle2.title2 }}</div>
      <div class="_nso">
        <div class="wlx">
          <div class="_tx">
            <div class="_txin">{{ amountTitle2.cntPassport }}:</div>
            <div class="_txinn">{{ this.$store.getters.data.nationalOut.cntPassport }}</div>
          </div>
          <div class="_tx">
            <div class="_txin">{{ amountTitle2.cntborderPass }}:</div>
            <div class="_txinn">{{ this.$store.getters.data.nationalOut.cntborderPass }}</div>
          </div>
          <div class="_tx">
            <div class="_txin">{{ amountTitle2.laoPassenger }}:</div>
            <div class="_txinn">{{ this.$store.getters.data.nationalOut.laoPassenger }}</div>
          </div>
          <div class="_tx">
            <div class="_txin">{{ amountTitle2.foreignerPassenger }}:</div>
            <div class="_txinn">{{ this.$store.getters.data.nationalOut.foreignerPassenger }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="nbw">
      <div class="ttitle">{{ amountTitle2.title3 }}</div>
      <div class="_mny" v-if="this.$store.getters.data != null">
        <e-charts :options="DataOption" :class="['pie2']" style="width: 100%; height: 26vh;" />
      </div>
    </div>
  </div>
</template>

<script>
import numeral from "numeral";
import jdata from "@/views/data.json";

import ECharts from "vue-echarts";
// import Charts from 'vue-echarts/components/ECharts'
import "echarts/lib/chart/pie";
import "echarts/lib/component/tooltip";

export default {
  props: {
    demo: null
  },
  components: {
    ECharts
  },
  data() {
    return {
      num: numeral,
      amountTitle: jdata.amountTitle,
      amountTitle2: jdata.amountTitle2,
      size: {
        s1: "",
        s2: "",
        s3: "",
        s4: ""
      }
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 900) {
        this.size.s1 = "50%";
        this.size.s2 = "70%";
        this.size.s3 = "40%";
        this.size.s4 = "60%";
      } else {
        this.size.s1 = "55%";
        this.size.s2 = "40%";
        this.size.s3 = "25%";
        this.size.s4 = "40%";
      }
    });
    if (window.innerWidth < 900) {
      this.size.s1 = "50%";
      this.size.s2 = "70%";
      this.size.s3 = "40%";
      this.size.s4 = "60%";
    } else {
      this.size.s1 = "55%";
      this.size.s2 = "40%";
      this.size.s3 = "25%";
      this.size.s4 = "40%";
    }
  },
  computed: {
    DataOption() {
      let data = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} ({d}%)",
          textStyle: {
            fontFamily: "saysettha"
          }
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: [
            `${jdata.amountTitle2.cntPassport}: ${this.$store.getters.data.passengerDoc[1].cntPerson}`,
            `${jdata.amountTitle2.cntborderPass}: ${this.$store.getters.data.passengerDoc[0].cntPerson}`
          ],
          textStyle: {
            fontFamily: "saysettha",
            color: "#fff",
            fontSize: 16
          }
        },
        series: [
          {
            name: "National In/Out",
            type: "pie",
            center: [this.size.s1, this.size.s2],
            radius: [this.size.s3, this.size.s4],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "10",
                  fontWeight: "bold",
                  fontFamily: "saysettha",
                  fontSize: 12
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: this.$store.getters.data.passengerDoc[1].cntPerson,
                name: `${jdata.amountTitle2.cntPassport}: ${this.$store.getters.data.passengerDoc[1].cntPerson}`,
                itemStyle: {
                  color: "#f38734"
                }
              },
              {
                value: this.$store.getters.data.passengerDoc[0].cntPerson,
                name: `${jdata.amountTitle2.cntborderPass}: ${this.$store.getters.data.passengerDoc[0].cntPerson}`,
                itemStyle: {
                  color: "#c94cfa"
                }
              }
            ]
          }
        ]
      };
      return data;
    }
  }
};
</script>
