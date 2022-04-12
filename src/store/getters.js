export default {

    getProducts: (state) => { return state.products },
    getElectronicsProducts: (state) => {
        return state.electronics
    },
    getJeweleriesProducts: (state) => {
        return state.jeweleries
    },
    getMenProducts: (state) => {
        return state.men
    },
    getWomenProducts: (state) => {
        return state.women
    },
    getProductDetails: (state) => { return state.product },
    getCartedItems: (state) => { return state.cartProducts },
    getIsProduct: (state) => { return state.isProduct },
    getEmpty: (state) => { return state.empty }
}