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
    cartEmpty: true,
    product: null,
    isProduct: false,
    cartItems: [],
    cartProducts: JSON.parse(localStorage.getItem("mytoreCart")) || 0,
  },
  mutations,
  actions,
  getters
})
