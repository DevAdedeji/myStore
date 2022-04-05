<template>
  <header>
    <div class="container">
      <div class="logo">
        <h1>myStore</h1>
      </div>
      <nav>
        <ul>
          <li><a href="/electronics">Electronics</a></li>
          <li><a href="/jewelery">Jewelery</a></li>
          <li><a href="/men">Men's</a></li>
          <li><a href="/women">Women's</a></li>
        </ul>
      </nav>
      <div class="cart-container">
        <div class="cart">
          <img src="../assets/icon-cart.svg" alt="cart icon" />
          <p>{{ getCartedItem }}</p>
        </div>
        <div @click="toggleMenu" class="menuBtn">
          <img src="../assets/icon-menu.svg" alt="icon-menu icon" />
        </div>
      </div>
    </div>
  </header>
  <div class="mobileMenu">
    <div class="container">
      <nav>
        <ul>
          <li><a href="/electronics">Electronics</a></li>
          <li><a href="/jewelery">Jewelery</a></li>
          <li><a href="/men">Men's</a></li>
          <li><a href="/women">Women's</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "HelloWorld",
  setup() {
    function toggleMenu() {
      document.querySelector(".mobileMenu").classList.toggle("show");
    }
    return {
      toggleMenu,
    };
  },
  computed: { ...mapGetters(["getCartedItem"]) },
};
</script>


<style lang="scss" scoped>
header {
  width: 100%;
  height: 15vh;
  .container {
    width: 90%;
    margin: 0 auto;
    border-bottom: 1px solid #808080;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      h1 {
        color: var(--primary-color);
      }
    }
    nav {
      ul {
        li {
          list-style: none;
          display: inline-block;
          padding: 0 15px;
          a {
            text-decoration: none;
            color: black;
          }
          a:hover {
            color: var(--primary-color);
          }
        }
      }
    }
    .cart-container {
      display: flex;
      align-items: center;
      gap: 20px;
      .cart {
        display: flex;
        align-items: center;
        gap: 20px;
        border: 2px solid var(--primary-color);
        height: 20px;
        border-radius: 5px;
        padding: 10px;
        cursor: pointer;
      }
      .menuBtn {
        display: none;
      }
    }
  }
}
.mobileMenu {
  display: none;
  .container {
    width: 100%;
    background-color: #fff;
    z-index: 500;
    nav {
      ul {
        li {
          list-style: none;
          padding: 10px 0;
          a {
            text-decoration: none;
            color: #808080;
          }
          a:hover {
            border-bottom: 2px solid var(--primary-color);
          }
        }
      }
    }
  }
}

@media (max-width: 850px) {
  header {
    .container {
      nav {
        display: none;
      }
      .cart-container {
        .menuBtn {
          display: block;
          cursor: pointer;
        }
      }
    }
  }
  .mobileMenu.show {
    display: block;
  }
}
</style>
