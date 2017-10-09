import React from 'react';
import PokemonDetail from './';
import { mount, shallow } from 'enzyme';

it('renders without crashing', () => {
  const sampleData = {
    id: 34,
    imageUrl: 'http://lorempixel.com/96/96/',
    name: 'Pikachu',
    types: ['something', 'sometype'],
    weight: 69,
    height: 3,
    baseExperience: 194,
    abilities: ['ability-1', 'ability-2'],
    stats: [
      'speed: 45',
      'special defense: 23',
      'special attack: 169',
      'defense: 30',
      'attack: 90',
      'hp: 39'
    ]
  }

  const component = mount(
    <PokemonDetail open={true} pokemon={sampleData} />
  );
});