import * as actionEnum from '../actions/actionEnums';
import { getImageFromId } from '../utils';

const initialState = {
  pokemonData: {
    id: '',
    name: '',
    imageUrl: '',
    weight: '',
    height: '',
    baseExperience: '',
    abilities: [],
    stats: [],
    types: []
  },
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

      console.log(pokemonData);

      return { ...state, showModal: true, showLoading: false, pokemonData: pokemonData };

    case actionEnum.FETCH_POKEMON_DETAIL_PROGRESS:
      return {
        ...state,
        showModal: false,
        showLoading: true,
        pokemonData: {
          id: '',
          name: '',
          imageUrl: '',
          weight: '',
          height: '',
          baseExperience: '',
          abilities: [],
          stats: [],
          types: []
        }
      };

    case actionEnum.FETCH_POKEMON_DETAIL_FAILED:
      return {
        ...state,
        showModal: false,
        showLoading: false,
        pokemonData: {
          id: '',
          name: '',
          imageUrl: '',
          weight: '',
          height: '',
          baseExperience: '',
          abilities: [],
          stats: [],
          types: []
        }
      };

    case actionEnum.CLEAR_POKEMON_DETAIL:
      return {
        pokemonData: {
          id: '',
          name: '',
          imageUrl: '',
          weight: '',
          height: '',
          baseExperience: '',
          abilities: [],
          stats: [],
          types: []
        },
        showModal: false,
        showLoading: false
      };

    default:
      return state;
  }
}