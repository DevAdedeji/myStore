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
    getCartEmpty: (state) => { return state.cartEmpty },
    getProductDetails: (state) => { return state.product },
    getnumberOfCartedItems: (state) => { return state.numberOfCartedItems }
}