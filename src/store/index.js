import { createStore } from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

export default createStore({
  state: {
    electronics: null,
    jeweleries: null,
    men: null,
    women: null,
    products: null,
    empty: true,
    product: null,
    isProduct: false,
    cartItems: [],
    cartProducts: localStorage.getItem("myStoreCarts") ? JSON.parse(localStorage.getItem("myStoreCarts")) : 0,
  },
  mutations,
  actions,
  getters
})
