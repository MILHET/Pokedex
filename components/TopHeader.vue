<template>
  <header class="top-header util__flex util__container">

    <nav class="top-header__col">

      <ul class="nav">
        <li>
          <nuxt-link class="nav__item" to="/">Home</nuxt-link>
          <nuxt-link class="nav__item" to="pokedex">Pokedex</nuxt-link>
        </li>
      </ul>

    </nav>

    <nuxt-link to="/" class="top-header__col top-header__logo">
      <img src="../assets/img/pokeball.png">
    </nuxt-link>

  </header>
</template>

<script>
    export default {
        name: "TopHeader"
    }
</script>

<style scoped lang="scss">
  .top-header {
    justify-content: space-between;
    padding-top: 30px;
    padding-bottom: 30px;

    .nav__item {
      padding: 5px;
      color: white;
      text-decoration: none;

      &:hover {
        color: yellow;
      }
    }

    .nav__item__right {
      position: absolute;
      right: 5%;
      background-color: yellow;
      color: black;

      &:hover {
        background-color: orangered;
      }
    }

    &__logo {
      text-align: center;
      position: absolute;
      left: 50%;

      img {
        position: relative;
        max-height: 60px;
        left: -50%;
        top: -15px;
      }
    }
  }

  .sidebar {
    text-align: right;
  }

  .img-thumbnail {
    border: none;
    background: none;
  }

  .btn-danger {
    margin-left: 5px;
    margin-right: 5px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      cursor: pointer;
    }
  }

</style>
