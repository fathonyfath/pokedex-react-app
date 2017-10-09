import * as action from './actionEnums';

export const addPokemonToList = (payload) => ({
  type: action.ADD_POKEMON_TO_LIST,
    payload
})

export const clearPokemonList = () => ({
  type: action.CLEAR_POKEMON_LIST
})

export const fetchPokemonSuccess = (payload) => ({
  type: action.FETCH_POKEMON_SUCCESS,
    payload
})

export const fetchPokemonFailed = (payload) => ({
  type: action.FETCH_POKEMON_FAILED,
    payload
})

export const fetchPokemon = (offset) => (dispatch) => {
  const uri = `http://pokeapi.salestock.net/api/v2/pokemon-species/?offset=${offset}`;

  fetch(uri)
    .then(response => response.json())
    .then(json => dispatch(fetchPokemonSuccess(json)))
    .catch(error => dispatch(fetchPokemonFailed(error)));
}