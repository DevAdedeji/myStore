export default {
    getCartedItem: (state) => { return state.cartedItem },
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