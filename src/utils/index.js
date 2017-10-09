const rootImageDir = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

export const transformPokemonData = (pokemonData) => {
  const id = getIdFromURI(pokemonData.url);
  return {
    pokemonId: id, 
    pokemonName: pokemonData.name, 
    pokemonImageUrl: rootImageDir + id + '.png'
  }
};

const getIdFromURI = (imageUrl) => {
  return imageUrl.match(/\/\d+\/$/g)[0].replace(/\//g, '');
}