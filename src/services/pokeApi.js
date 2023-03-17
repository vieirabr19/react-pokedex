// const URL_API = '//pokeapi.co/api/v2';
const URL_API = 'https://dev.treinaweb.com.br/pokeapi';

const PokeApi = {
  get url(){
    return URL_API;
  },
  pkmList: [],
  listAll: function() {
    return fetch(`${URL_API}/pokedex/1`)
    .then(response => response.json())
    .then(response => response.pokemon)
    .then(pkmList => {
      return pkmList
      .map(pokemon => {
        pokemon.number = this.getNumberFromURL(pokemon.resource_uri);
        return pokemon;
      })
      .filter(pokemon => parseInt(pokemon.number) < 1000)
      .sort((a, b) => a.number > b.number ? 1 : -1)
      .map(pokemon => {
        pokemon.number = ('000' + pokemon.number).slice(-3);
        return pokemon;
      })
    })
    .then(pkmList => {
      this.pkmList = pkmList;
      return pkmList;
    });
  },
  getPkm: (pkm) => {
    return fetch(`${URL_API}/pokemon/${pkm.number}`)
    .then(response => response.json());
  },
  getNumberFromURL: (url) => {
    return parseInt(url.replace(/.*\/(\d+)\/$/,'$1'));
  }
}

export default PokeApi;