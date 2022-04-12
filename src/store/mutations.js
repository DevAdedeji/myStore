export default {
    setProducts: (state, data) => state.products = data,
    setElectronics: (state, data) => state.electronics = data,
    setJeweleries: (state, data) => state.jeweleries = data,
    setMen: (state, data) => state.men = data,
    setWomen: (state, data) => state.women = data,
    setProductDetails: (state, data) => state.product = data,
    setCartItems: (state, data) => state.cartItems = data,
    setIsProduct: (state, data) => state.isProduct = data,
    setCartAmt: (state, data) => state.cartProducts = data,
    deleteItem: (state, id) => state.cartProducts.filter(product => product.id !== id),
    setCartEmpty:(state, data)=> state.cartEmpty = data
}