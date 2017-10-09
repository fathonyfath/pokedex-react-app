import { combineReducers } from 'redux';
import pokemonListReducer from './pokemonListReducer';
import pokemonDetailReducer from './pokemonDetailReducer';

const parentReducer = combineReducers({
  pokemonList: pokemonListReducer, 
  pokemonDetail: pokemonDetailReducer
});

export default parentReducer;