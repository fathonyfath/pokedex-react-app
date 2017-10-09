import * as actionEnum from '../actions/actionEnums';
import { transformPokemonData, getIdFromURI, getImageFromId } from '../utils';

const initialState = {
  pokemonData: {},
  showModal: false,
  showLoading: false
}

export default function pokemonDetailReducer(state = initialState, action) {
  switch (action.type) {
    case actionEnum.FETCH_POKEMON_DETAIL_SUCCESS:
      const generatedImageUrl = getImageFromId(action.payload.id);
      const abilities = action.payload.abilities.map(ability => ability.ability.name);
      const stats = action.payload.stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`);
      const types = action.payload.types.map(type => type.type.name);

      const pokemonData = {
        id: action.payload.id,
        name: action.payload.name,
        imageUrl: generatedImageUrl, 
        weight: action.payload.weight, 
        height: action.payload.height, 
        baseExperience: action.payload.base_experience, 
        abilities: abilities, 
        stats: stats, 
        types: types
      }

      return { ...state, showModal: true, showLoading: false, pokemonData: pokemonData };

    case actionEnum.FETCH_POKEMON_DETAIL_PROGRESS:
      return { ...state, showModal: false, showLoading: true, pokemonData: {} };

    case actionEnum.FETCH_POKEMON_DETAIL_FAILED:
      return { ...state, showModal: false, showLoading: false, pokemonData: {} };

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