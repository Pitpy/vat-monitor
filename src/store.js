import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "@/router.js";
import code from "@/helper/father.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: null,
    popup: false,
    loginStatus: {
      text: "welcome",
      status: true
    },
    api: "https://www.bcel.com.la/monitor/monitor.php",
    apiReport: "http://10.0.2.250:8080/smartvat2report/report?act="
  },
  getters: {
    data: state => state.data,
    api: state => state.api,
    apiReport: state => state.apiReport
  },
  mutations: {
    SET_DATA(state, data) {
      state.data = data;
    },
    setPopup(state, payload) {
      state.popup = payload;
    },
    auth(state, payload) {
      if (payload.status) {
        localStorage.setItem("thor", code.to(JSON.stringify(payload.info)));
        router.push("/dashboard");
        state.loginStatus = {
          text: "welcome",
          status: true
        };
      } else {
        state.loginStatus = {
          text: "login failed!!!",
          status: false
        };
        setTimeout(() => {
          state.loginStatus = {
            text: "welcome",
            status: true
          };
        }, 3000);
      }
    }
  },
  actions: {
    data({ commit }, data) {
      commit("SET_DATA", data);
    },
    auth({ commit }, payload) {
      axios.post("http://10.0.10.40:8200/api/auth", payload).then(res => {
        commit("auth", { info: payload, status: res.data });
      });
    },
    setPopup({ commit }, payload) {
      commit("setPopup", payload);
    }
  }
});
