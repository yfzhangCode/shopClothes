import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import getters from './getters'
import actions from './actions'
// 使用vuex
Vue.use(Vuex)

const state = {
  cartGoodsInfo: []
}
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  strict: true
})

export default store