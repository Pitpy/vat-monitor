<template>
  <div class="home">
    <transition leave-active-class="animated fadeOut">
      <div class="loading" v-if="!this.$store.state.data">
        <loading></loading>
      </div>
    </transition>
    <Settings v-if="this.$store.state.popup"></Settings>
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <div v-if="this.$store.state.data">
        <header key="1">
          <app-header></app-header>
        </header>
        <div class="spc" key="2"></div>
        <div class="lut" key="3" v-if="screen">
          <div class="lyt01" id="scroll1" ref="scroll_id1" v-if="show === true">
            <v-in />
          </div>
          <div class="lyt02">
            <div class="hsow">
              <div class="malsd01">
                <div class="oho">
                  <div class="slp">
                    <div class="xslw" v-if="display == true">
                      <a-total />
                    </div>
                  </div>
                </div>
                <div class="ngs">
                  <passenger-doc />
                </div>
              </div>
              <div class="malsd02">
                <div class="woe">
                  <div class="pel">
                    <national-in-out />
                  </div>
                </div>
              </div>
              <div class="malsd02">
                <div class="woe">
                  <in-out-summary />
                </div>
              </div>
            </div>
          </div>
          <div class="lyt01" id="scroll2" ref="scroll_id2" v-if="show === true">
            <o-in />
          </div>
          <div class="howp" v-if="show === false">
            <div class="howl_" :style="{height: `${ioHeight}px`}">
              <div class="lyt01" id="scroll1" ref="scroll_id1">
                <v-in :iHeight="iHeight" />
              </div>
            </div>
            <div class="howl_" :style="{height: `${ioHeight}px`}">
              <div class="lyt01 spc_" id="scroll2" ref="scroll_id2">
                <o-in :oHeight="oHeight" />
              </div>
            </div>
          </div>
        </div>
        <div class="lut">
          <swiper :options="swiperOption">
            <div class="swiper-pagination" slot="pagination" :style="{marginBottom: '50px'}"></div>
            <!-- slide 1 -->
            <swiper-slide>
              <div class="lyt02">
                <div class="hsow">
                  <div class="malsd02">
                    <div class="woe">
                      <in-out-summary />
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>

            <!-- slide 2 -->
            <swiper-slide>
              <div class="lyt02">
                <div class="hsow">
                  <div class="malsd01">
                    <div class="oho">
                      <div class="slp">
                        <div class="xslw" v-if="display == true">
                          <a-total />
                        </div>
                      </div>
                    </div>
                    <div class="ngs">
                      <passenger-doc />
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>

            <!-- slide 3 -->
            <swiper-slide>
              <div class="lyt02">
                <div class="hsow">
                  <div class="malsd02">
                    <div class="woe">
                      <div class="pel">
                        <national-in-out />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="howp">
                <div class="howl_" :style="{height: `${ioHeight}px`}">
                  <div class="lyt01" id="scroll1" ref="scroll_id1">
                    <v-in :iHeight="iHeight" />
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="howp">
                <div class="howl_" :style="{height: `${ioHeight}px`}">
                  <div class="lyt01 spc_" id="scroll2" ref="scroll_id2">
                    <o-in :oHeight="oHeight" />
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
// import AppHeader from "@/views/header/index.vue"
import VIn from "@/components/VehicleIn.vue";
import OIn from "@/components/VehicleOut.vue";
import PassengerDoc from "@/components/PassengerDoc.vue";
import NationalInOut from "@/components/NationalInOut.vue";
import InOutSummary from "@/components/inOutSummary/index.vue";
import ATotal from "@/components/Atotal.vue";
import Settings from "@/components/Settings.vue";

const Loading = () => import("@/components/Loading.vue");
import AppHeader from "@/views/header/index.vue";

import jdata from "@/views/data.json";
import japi from "../api.demo.json";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    // AppHeader,
    Settings,
    ATotal,
    VIn,
    OIn,
    PassengerDoc,
    NationalInOut,
    InOutSummary,
    swiper,
    swiperSlide,
    AppHeader,
    Loading
  },
  data() {
    return {
      screen: false,
      show: null,
      ioHeight: 0,
      iHeight: null,
      oHeight: null,
      display: false,
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  created() {
    this.getAPI();
  },
  mounted() {
    setInterval(() => {
      this.getAPI();
    }, 3000);
    window.addEventListener("resize", () => {
      if (window.innerWidth < 900) {
        this.show = false;
        this.screen = false;
      } else {
        this.show = true;
        this.screen = true;
      }
      this.getHeight();
    });
    if (window.innerWidth < 900) {
      this.show = false;
      this.screen = false;
    } else {
      this.show = true;
      this.screen = true;
    }
    setTimeout(() => {
      this.getHeight();
    }, 200);

    setTimeout(() => {
      this.display = true;
    }, 500);
    window.addEventListener("beforeunload", () => {
      if (localStorage.getItem("logRemember") === "false") localStorage.clear();
    });
  },
  methods: {
    async getAPI() {
      const dataAPI = await this.axios.get(this.$store.getters.api);

      this.$store.dispatch("data", dataAPI.data);
      let i = 0;
      dataAPI.data.vehicleOut.forEach(el => {
        if (el.vehicleCnt > 0) {
          i = i + 1;
        }
      });

      if (i < 9) this.ioHeight = 800;
      else this.ioHeight = 1300;
    },
    getHeight() {
      const h1 = this.$refs.scroll_id1.clientHeight;
      const h2 = this.$refs.scroll_id2.clientHeight;
      this.ioHeight = {
        height: `100%`
      };
      this.iHeight = h1;
      this.oHeight = h2;
    }
  }
};
</script>

<style lang="scss">
@import "~@/assets/fonts/fontello/css/fontello.css";
@import "~@/assets/fonts/DSDIGI/font.css";
@import "@/assets/scss/home/layout.scss";

.list-item {
  display: inline-block;
  margin-right: 30px;
}
.list-enter-active,
.list-leave-active {
  transition: all 3s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.swiper-pagination {
  top: 10px;
}
.swiper-container {
  padding-top: 30px;
}
.swiper-pagination-bullet + .swiper-pagination-bullet-active {
  background: red;
}
.swiper-pagination-bullet {
  width: 8px;
  background: #ffffff;
  height: 8px;
  display: inline-block;
  border-radius: 100%;
}
</style>
