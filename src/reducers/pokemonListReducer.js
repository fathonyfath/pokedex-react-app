import * as actionEnum from '../actions/actionEnums';
import { transformPokemonData } from '../utils';

const initialState = {
  totalPokemonCount: 0,
  pokemonList: [],
  hasMoreItem: true,
  offset: 0,
  filter: 'all-generation'
};

export default function pokemonListReducer(state = initialState, action) {
  switch (action.type) {
    case actionEnum.FETCH_POKEMON_SUCCESS:
      const newList = [...state.pokemonList, ...action.payload.results.map(data => transformPokemonData(data))];
      const hasMore = newList.length < action.payload.count;
      const newOffset = state.offset + action.payload.results.length;
      return {
        ...state,
        totalPokemonCount: action.payload.count,
        pokemonList: newList,
        hasMoreItem: hasMore,
        offset: newOffset
      };

    case actionEnum.FETCH_POKEMON_GENERATION_SUCCESS:
      const newListGeneration = [...state.pokemonList, ...action.payload.pokemon_species.map(data => transformPokemonData(data))];
      const hasMoreGeneration = newListGeneration.length < action.payload.pokemon_species.length;
      const newOffsetGeneration = state.offset + action.payload.pokemon_species.length;
      return {
        ...state,
        totalPokemonCount: action.payload.count,
        pokemonList: newListGeneration,
        hasMoreItem: hasMoreGeneration,
        offset: newOffsetGeneration
      };

    case actionEnum.CLEAR_POKEMON_LIST:
      return {
        totalPokemonCount: 0,
        pokemonList: [],
        hasMoreItem: true,
        offset: 0,
        filter: 'all-generation'
      };

    case actionEnum.SET_GENERATION_FILTER:
      return { ...state, filter: action.payload };

    default:
      return state;
  }
}