import React from 'react';
import PokemonCard from './PokemonCard';
import { mount } from 'enzyme';

it('renders without crashing', () => {
  const component = mount(
    <PokemonCard pokemonId='1' pokemonImageUrl='http://lorempixel.com/200/200/' pokemonName='Pikachu' />
  );
});

it('render component correctly', () => {
  const sampleData = {
    pokemonId: 1,
    pokemonImageUrl: 'http://lorempixel.com/200/200/',
    pokemonName: 'Pikachu'
  }

  const component = mount(
    <PokemonCard
      pokemonId={sampleData.pokemonId}
      pokemonImageUrl={sampleData.pokemonImageUrl}
      pokemonName={sampleData.pokemonName} />
  );

  const imageComponent = component.find('img.pokemon-image');
  const nameComponent = component.find('div.pokemon-name');

  expect(nameComponent.text()).toBe(sampleData.pokemonName);
  expect(imageComponent.prop('src')).toBe(sampleData.pokemonImageUrl)
});