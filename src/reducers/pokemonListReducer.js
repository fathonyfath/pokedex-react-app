import * as actionEnum from '../actions/actionEnums';
import { transformPokemonData } from '../utils';

const initialState = {
  totalPokemonCount: 0,
  pokemonList: [], 
  hasMoreItem: true
};

export default function pokemonListReducer(state = initialState, action) {
  switch (action.type) {
    case actionEnum.FETCH_POKEMON_SUCCESS:
    const newList = [...state.pokemonList, ...action.payload.results.map(data => transformPokemonData(data))];
    const hasMore = newList.length < action.payload.count;
      return {
        ...state,
        totalPokemonCount: action.payload.count,
        pokemonList: newList, 
        hasMoreItem: hasMore
      };
    default:
      return state;
  }
}