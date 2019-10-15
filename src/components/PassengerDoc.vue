<template>
  <div class="vls" v-if="this.$store.getters.data">
    <div class="nlsl">
      <div class="ttitlet">{{ amountTitle2.cntPassport }}</div>
      <div class="crt">
        <div class="cho">
          <div class="owo_">
            <div class="how_">
              <div class="lgl">
                <div class="lcon">
                  <img class="im1" src="../assets/img/passbook.png" />
                </div>
              </div>
            </div>
            <div class="how_">
              <div class="dtl">
                <div class="amt">
                  <transition name="list" tag="p">
                    <span
                      class="list-item cl1"
                    >{{ this.$store.getters.data.passengerDoc[1].cntPerson }}</span>
                  </transition>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cho2">
          <div class="_jwo">
            <div class="lnt">
              <div class="lo">{{ amountTitle.fees }}:</div>
              <div
                class="lo2"
              >{{ num(this.$store.getters.data.passengerDoc[1].fees).format("0,0") }}</div>
            </div>
            <div class="lnt">
              <div class="lo">{{ amountTitle.otfees }}:</div>
              <div
                class="lo2"
              >{{ num(this.$store.getters.data.passengerDoc[1].otFees).format("0,0") }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="nlsl">
      <div class="ttitlet">{{ amountTitle2.cntborderPass }}</div>
      <div class="crt">
        <div class="cho">
          <div class="owo_">
            <div class="how_">
              <div class="lgl">
                <div class="lcon">
                  <img class="im2" src="../assets/img/borderpass.png" />
                </div>
              </div>
            </div>
            <div class="how_">
              <div class="dtl">
                <div class="amt">
                  <transition name="list" tag="p">
                    <span
                      class="list-item cl2"
                    >{{ this.$store.getters.data.passengerDoc[0].cntPerson }}</span>
                  </transition>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cho2">
          <div class="_jwo">
            <div class="lnt">
              <div class="lo">{{ amountTitle.fees }}:</div>
              <div
                class="lo2"
              >{{ num(this.$store.getters.data.passengerDoc[0].fees).format("0,0") }}</div>
            </div>
            <div class="lnt">
              <div class="lo">{{ amountTitle.otfees }}:</div>
              <div
                class="lo2"
              >{{ num(this.$store.getters.data.passengerDoc[0].otFees).format("0,0") }}</div>
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
  data() {
    return {
      img: {
        border: "borderpass.png"
      },
      num: numeral,
      amountTitle: jdata.amountTitle,
      amountTitle2: jdata.amountTitle2
    };
  }
};
</script>

<style lang="scss">
</style>
