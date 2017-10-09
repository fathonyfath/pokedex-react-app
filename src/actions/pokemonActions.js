import * as action from './actionEnums';

const rootUri = 'http://pokeapi.salestock.net/';

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

export const fetchPokemonGenerationSuccess = (payload) => ({
  type: action.FETCH_POKEMON_GENERATION_SUCCESS,
  payload
})

export const fetchPokemonGenerationFailed = (payload) => ({
  type: action.FETCH_POKEMON_GENERATION_FAILED,
  payload
})

export const setGenerationFilter = (payload) => ({
  type: action.SET_GENERATION_FILTER,
  payload
})

export const fetchPokemon = (offset) => (dispatch) => {
  const uri = `${rootUri}api/v2/pokemon-species/?offset=${offset}`;

  fetch(uri)
    .then(response => response.json())
    .then(json => dispatch(fetchPokemonSuccess(json)))
    .catch(error => dispatch(fetchPokemonFailed(error)));
}

export const fetchPokemonGeneration = (generation) => (dispatch) => {
  const uri = `${rootUri}api/v2/generation/${generation}`;

  fetch(uri)
    .then(response => response.json())
    .then(json => dispatch(fetchPokemonGenerationSuccess(json)))
    .catch(error => dispatch(fetchPokemonGenerationFailed(error)));
}