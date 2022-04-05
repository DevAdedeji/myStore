import { createStore } from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

export default createStore({
  state: {
    cartedItem: 0,
    electronics: null,
    jeweleries: null,
    men: null,
    women: null,
    products: null,
    cartEmpty: true,
  },
  mutations,
  actions,
  getters
})
