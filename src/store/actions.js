import axios from 'axios'
const link = "https://fakestoreapi.com/products"
const electronicsLink = "https://fakestoreapi.com/products/category/electronics"
const jeweleriesLink = "https://fakestoreapi.com/products/category/jewelery"
const menLink = "https://fakestoreapi.com/products/category/men's clothing"
const womenLink = "https://fakestoreapi.com/products/category/women's clothing"


export default {
    async getProducts({ commit }) {
        try {
            const response = await axios.get(link)
            commit("setProducts", response.data)
            document.querySelector(".loader").style.display = "none"
        } catch (error) {
            throw new Error(error)
        }
    },
    async getElectronics({ commit }) {
        try {
            const response = await axios.get(electronicsLink)
            commit("setElectronics", response.data)
            document.querySelector(".loader").style.display = "none"
        } catch (error) {
            throw new Error(error)
        }
    },
    async getJeweleries({ commit }) {
        try {
            const response = await axios.get(jeweleriesLink)
            commit("setJeweleries", response.data)
            document.querySelector(".loader").style.display = "none"

        } catch (error) {
            throw new Error(error)
        }
    },
    async getMen({ commit }) {
        try {
            const response = await axios.get(menLink)
            commit("setMen", response.data)
            document.querySelector(".loader").style.display = "none"
        } catch (error) {
            throw new Error(error)
        }
    },
    async getWomen({ commit }) {
        try {
            const response = await axios.get(womenLink)
            commit("setWomen", response.data)
            document.querySelector(".loader").style.display = "none"

        } catch (error) {
            throw new Error(error)
        }
    },
    async getProdctDetail({ commit }, id) {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
            commit("setProductDetails", response.data)

            document.querySelector(".loader").style.display = "none"

        } catch (error) {
            throw new Error(error)
        }
    },
    addToCart() {
        this.state.cartedItem += 1
        this.state.cartItems = this.state.cartItems.concat(this.state.product)
        console.log(this.state.cartItems);
        document.getElementById("addBtn").textContent = "Added To Cart"
        document.getElementById("addBtn").disabled = 'true'
    },
}