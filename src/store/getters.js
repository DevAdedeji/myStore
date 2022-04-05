export default {
    getCartedItem: (state) => { return state.cartedItem },
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
}