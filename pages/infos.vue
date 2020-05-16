<template>
  <div class="container">

    <img class="card-img-top" v-bind:src="infos.sprites.front_default">

    <div class="card-body">

      <h5 class="card-title">{{ infos.name }}</h5>

      <div class="infos">

        <div class="row">

          <div class="col">

            <p>Base Experience: {{ infos.base_experience }}</p>

            <label> Abilities: </label>
            <ul>
              <li v-for="elem in infos.abilities">
                {{ elem.ability.name}}
              </li>
            </ul>

          </div>

          <div class="col">

            <p>Height: {{ infos.height }}</p>

            <label> Stats: </label>

            <ul>
              <li v-for="elem in infos.stats">
                {{ elem.stat.name }}: {{elem.base_stat}}
              </li>
            </ul>

          </div>

          <div class="col">
            <p>Weight: {{ infos.weight }}</p>
          </div>

        </div>

      </div>
      
    </div>

  </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: 'infos',
        data() {
            return {
                infos: ''
            }
        },
        created(): void {
            this.infos = this.$route.params.infos;
        },
    })
</script>

<style scoped lang="scss">

  .btn {
    color: white !important;
  }

  .container {
    display: block;
    background: linear-gradient(#D4E93A, #9198e5) !important;
    border-radius: 4px;
    min-height: 0;
    margin-bottom: 30px;
  }

  .card-img-top {
    width: 20vw;
  }

  .card-title {
    font-size: 1.5em;
  }

  .infos {
    text-align: left;
  }

</style>
