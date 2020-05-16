import axios from 'axios';

export const state = () => ({
  counter: 0,
  pokedexList: [],
  countShow: 20
});

export const mutations = {
  setList (state, elem) {
    state.pokedexList = elem;
  },
  increment (state) {
    state.countShow = state.countShow + 20;
  }
};

export const actions = {
  async GET_LIST ({commit}) {
    const listUrl = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=110`);
    let tmp =[{}];
    for (let i = 0; i < listUrl.data.results.length; i++) {
      let pokemon = await axios.get(listUrl.data.results[i].url);
      tmp.push(pokemon.data);
    }
    tmp.shift();
    commit('setList', tmp);
  },
  INCREMENT ({commit}) {
    commit('increment');
  }
};
