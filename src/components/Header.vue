<template>
  <header>
    <div class="container">
      <div class="logo">
        <h1>myStore</h1>
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/electronics">Electronics</a></li>
          <li><a href="/jewelery">Jewelery</a></li>
          <li><a href="/men">Men's</a></li>
          <li><a href="/women">Women's</a></li>
        </ul>
      </nav>
      <div class="cart-container">
        <a href="/cart">
          <div class="cart">
            <img src="../assets/icon-cart.svg" alt="cart icon" />
            <p>{{ getCartedItem }}</p>
          </div>
        </a>
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
          <li><a href="/">Home</a></li>
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
  background-color: #fff;
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  .container {
    width: 90%;
    margin: 0 auto;
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
      a {
        text-decoration: none;
        font-size: 18px;
        .cart {
          display: flex;
          align-items: center;
          gap: 20px;
          border: 2px solid var(--primary-color);

          border-radius: 5px;
          padding: 10px;
          cursor: pointer;
        }
      }
      .menuBtn {
        display: none;
      }
    }
  }
}
.mobileMenu {
  display: none;
  position: absolute;
  top: 15vh;
  left: 0;
  right: 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  .container {
    background-color: #fff;
    z-index: 500;
    nav {
      ul {
        width: 90%;
        margin: 0 auto;
        li {
          list-style: none;
          padding: 10px 0;
          a {
            text-decoration: none;
            color: #000;
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
    position: fixed;
  }
}

@media (max-width: 600px) {
  header {
    height: 10vh;
  }
  .mobileMenu {
    top: 10vh;
  }
}
</style>
