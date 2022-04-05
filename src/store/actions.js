import axios from 'axios'
const electronicsLink = "https://fakestoreapi.com/products/category/electronics"

export default {
    async getElectronics() {
        try {
            const responese = await axios.get(electronicsLink)
            console.log(response);
        } catch (error) {
            throw new Error(error)
        }
    }
}