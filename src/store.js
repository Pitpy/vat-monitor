import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: null,
    api: 'https://www.bcel.com.la/monitor/monitor.php',
    apiReport: 'http://10.0.2.250:8080/smartvat2report/report?act='
  },
  getters: {
    data: state => state.data,
    api: state => state.api,
    apiReport: state => state.apiReport
  },
  mutations: {
    SET_DATA(state, data) {
      state.data = data
    }
  },
  actions: {
    data({
      commit
    }, data) {
      commit('SET_DATA', data)
    },
  }
})