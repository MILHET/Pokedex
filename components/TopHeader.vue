<template>
  <header class="top-header util__flex util__container">

    <nav class="top-header__col">

      <ul class="nav">
        <li>
          <nuxt-link class="nav__item" to="/">Home</nuxt-link>
          <nuxt-link class="nav__item" to="pokedex">Pokedex</nuxt-link>
          <b-button class="nav__item__right" v-b-toggle.sidebar-1>My team</b-button>
          <b-sidebar class="sidebar" id="sidebar-1" title="My Team" shadow>

            <h2 v-if="teamList.length < 1" style="text-align: center"> It's time to make a team !</h2>

            <ul>
              <li v-for="element in teamList">
                <img v-bind:src="element.sprites.front_default">
                {{ element.name }}
                <button type="button" class="btn btn-danger" @click="remove(element)">Remove</button>
              </li>
            </ul>

            <div class="px-3 py-2">
              <b-img src="../assets/img/team.png" fluid thumbnail></b-img>
            </div>
          </b-sidebar>
        </li>
      </ul>

    </nav>

    <nuxt-link to="/" class="top-header__col top-header__logo">
      <img src="../assets/img/pokeball.png">
    </nuxt-link>

  </header>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: "TopHeader",
        computed: {
            teamList () {
                return this.$store.state.teamList
            }
        },
        methods: {
            remove(elem: any) {
                this.$store.dispatch('REMOVE', elem);
            }
        }
    })
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
