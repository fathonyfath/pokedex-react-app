import * as actionEnum from '../actions/actionEnums';
import { transformPokemonData } from '../utils';

const initialState = {
  totalPokemonCount: 0,
  pokemonList: []
};

export default function pokemonListReducer(state = initialState, action) {
  switch (action.type) {
    case actionEnum.FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        totalPokemonCount: action.payload.count,
        pokemonList: [...state.pokemonList, ...action.payload.results.map(data => transformPokemonData(data))]
      };
    default:
      return state;
  }
}