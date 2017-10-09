import * as actionEnum from '../actions/actionEnums';

const initialState = {
  pokemonData: {},
  showModal: false,
  showLoading: false
}

export default function pokemonDetailReducer(state = initialState, action) {
  switch (action.type) {
    case actionEnum.FETCH_POKEMON_DETAIL_SUCCESS:
      return state;
    case actionEnum.FETCH_POKEMON_DETAIL_FAILED:
      return { ...state, showModal: false, showLoading: false };
    case actionEnum.CLEAR_POKEMON_DETAIL:
      return {
        pokemonData: {},
        showModal: false, 
        showLoading: false
      };
    default:
      return state;
  }
}