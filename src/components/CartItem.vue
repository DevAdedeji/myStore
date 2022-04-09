<template>
  <div class="container">
    <div class="product">
      <img :src="Img" :alt="Name" />
      <div class="product-details">
        <p class="name">{{ Name }}</p>
        <p>Price: ${{ Price }}</p>
        <p class="desc">Desc: {{ description }}</p>
      </div>
    </div>

    <div class="con">
      <div class="btns">
        <button @click="dec">-</button>
        <p class="price">{{ Quantity }}</p>
        <button @click="inc">+</button>
      </div>
      <p class="total">Total Price: ${{ total }}</p>
    </div>
    <!-- <button id="delete" @click="deleteProduct()">Delete</button> -->
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    Img: String,
    Name: String,
    Price: Number,
    description: String,
    id: Number,
  },
  data() {
    return {
      Quantity: 1,
      total: this.Price,
    };
  },
  methods: {
    inc() {
      if (this.Quantity === 1 || this.Quantity > 1) {
        this.Quantity = this.Quantity + 1;
        this.total = this.Quantity * this.Price;
      }
    },
    dec() {
      if (this.Quantity > 1) {
        this.Quantity = this.Quantity - 1;
        this.total = this.Quantity * this.Price;
      }
    },
    ...mapActions(["deleteProduct"]),
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 60%;
  height: 300px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  .product {
    display: flex;
    width: 100%;
    height: 100%;

    gap: 20px;
    img {
      width: 100px;
      height: 100px;
    }
    .product-details {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .name {
        font-size: 20px;
        color: var(--primary-color);
      }
      .desc {
        font-size: 15px;
        width: 80%;
      }
    }
  }
  .con {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .btns {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      button {
        padding: 5px;
        font-size: 18px;
      }
    }
  }
}
</style>
