<template>
  <div class="container">

    <div class="search-input">
      <input type="text" class="form-control" placeholder="Search for pokemons.." v-model="search">
    </div>

    <div class="card-columns">
      <div class="card" v-for="(pokemon, index) in filteredList" v-if="index <= countShow">
        <a @click="handleClick(pokemon)">
          {{ pokemon.name }}
          <img class="card-img-top img-fluid" v-bind:src="pokemon.sprites.front_default">
        </a>
      </div>
    </div>

    <button v-if="countShow < filteredList.length" type="button" class="btn btn-primary" @click="loadMore">Load more</button>

  </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: 'pokedex',
        data() {
            return {
                search: ''
            }
        },
        async fetch({ store }: any) {
            if (store.state.pokedexList.length < 1)
                await store.dispatch('GET_LIST');
        },
        computed: {
            countShow () {
                return this.$store.state.countShow
            },
            filteredList() {
                return this.$store.state.pokedexList.filter((elem: any) => {
                    return elem.name.toLowerCase().includes(this.search.toLowerCase())
                })
            }
        },
        methods: {
            loadMore() {
                this.$store.dispatch('INCREMENT');
            },
            handleClick(e: any) {
                this.$router.push({
                    name: 'infos',
                    params: {
                        infos: e
                    }
                })
            }
        }
    })
</script>

<style scoped lang="scss">
  .container {
    display: block !important;
  }

  .search-input {
    margin: 30px;
  }

  .card {
    background: linear-gradient(#D4E93A, #9198e5) !important;
    padding-top: 10px;
    border: none !important;

    a {
      font-size: 1.3em;
      cursor: pointer;
    }

    &:hover {
      background: linear-gradient(#D4E93A, #919865) !important;
    }
  }

  .card-columns {
    column-count: 7 !important;
  }

  .btn-primary {
    margin-bottom: 20px;
    margin-top: 10px;
  }

  @media screen and (max-width: 1024px) {
    .card-columns {
      column-count: 5 !important;
    }
  }

  @media screen and (max-width: 768px) {
    .card-columns {
      column-count: 4 !important;
    }
  }

  @media screen and (max-width: 600px) {
    .card-columns {
      column-count: 1 !important;
    }
  }

</style>
