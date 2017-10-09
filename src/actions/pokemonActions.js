import * as action from './actionEnums';

const rootUri = 'http://pokeapi.salestock.net/';

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

export const fetchPokemonDetailSuccess = (payload) => ({
  type: action.FETCH_POKEMON_DETAIL_SUCCESS,
  payload
})

export const fetchPokemonDetailProgress = () => ({
  type: action.FETCH_POKEMON_DETAIL_PROGRESS
})

export const fetchPokemonDetailFailed = (payload) => ({
  type: action.FETCH_POKEMON_DETAIL_FAILED,
  payload
})

export const clearPokemonDetail = () => ({
  type: action.CLEAR_POKEMON_DETAIL
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

export const fetchPokemonDetail = (pokemonId) => (dispatch) => {
  const uri = `${rootUri}api/v2/pokemon/${pokemonId}`;

  dispatch(fetchPokemonDetailProgress());

  fetch(uri)
    .then(response => response.json())
    .then(json => dispatch(fetchPokemonDetailSuccess(json)))
    .catch(error => dispatch(fetchPokemonDetailFailed(error)));
}