import { transformPokemonData } from './';

it('transform pokemon data correctly', () => {
  const expected = {
    pokemonId: '1',
    pokemonName: 'bulbasaur',
    pokemonImageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
  }

  const sampleData = {
    url: 'http://pokeapi.salestock.net/api/v2/pokemon-form/1/', 
    name: 'bulbasaur'
  }
  expect(transformPokemonData(sampleData)).toEqual(expected);
});