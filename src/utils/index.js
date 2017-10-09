const rootImageDir = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

export const transformPokemonData = (pokemonData) => {
  const id = getIdFromURI(pokemonData.url);
  const imageUrl = getImageFromId(id);
  return {
    pokemonId: id, 
    pokemonName: pokemonData.name, 
    pokemonImageUrl: imageUrl
  }
};

export const getIdFromURI = (imageUrl) => {
  return imageUrl.match(/\/\d+\/$/g)[0].replace(/\//g, '');
}

export const getImageFromId = (id) => {
  return `${rootImageDir}${id}.png`;
}

export const removeDash = (name) => {
  return name.replace(/\-/g, ' ');
}

export const capitalizeFirstLetter = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
}