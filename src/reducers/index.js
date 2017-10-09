import { combineReducers } from 'redux';
import pokemonListReducer from './pokemonListReducer';

const parentReducer = combineReducers({
  pokemonList: pokemonListReducer
});

export default parentReducer;