import React from 'react';
import DetailContent from './DetailContent';
import { mount } from 'enzyme';

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
    <DetailContent open={true} pokemon={sampleData} />
  );
});

it('render component correctly', () => {
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
    <DetailContent pokemon={sampleData} />
  );

  const nameComponent = component.find('h3.pokemon-name');
  const imageComponent = component.find('img.pokemon-image');
  const typesComponent = component.find('div.pokemon-types');
  const weightComponent = component.find('div.pokemon-weight');
  const heightComponent = component.find('div.pokemon-height');
  const baseExpComponent = component.find('div.pokemon-base-exp');
  const abilitiesComponent = component.find('div.pokemon-abilities');
  const statComponent = component.find('div.pokemon-stats');

  expect(nameComponent.text()).toBe(`#${sampleData.id} - ${sampleData.name}`);
  expect(imageComponent.prop('src')).toBe(sampleData.imageUrl);

  expect(typesComponent.html()).toContain(sampleData.types[0]);
  expect(typesComponent.html()).toContain(sampleData.types[1]);

  expect(weightComponent.text()).toContain(sampleData.weight);
  expect(heightComponent.text()).toContain(sampleData.height);
  expect(baseExpComponent.text()).toContain(sampleData.baseExperience);
  
  expect(abilitiesComponent.html()).toContain(sampleData.abilities[0]);
  expect(abilitiesComponent.html()).toContain(sampleData.abilities[1]);

  expect(statComponent.html()).toContain(sampleData.stats[0]);
  expect(statComponent.html()).toContain(sampleData.stats[1]);
  expect(statComponent.html()).toContain(sampleData.stats[2]);
  expect(statComponent.html()).toContain(sampleData.stats[3]);
  expect(statComponent.html()).toContain(sampleData.stats[4]);
  expect(statComponent.html()).toContain(sampleData.stats[5]);
});