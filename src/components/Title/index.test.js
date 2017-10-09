import React from 'react';
import Title from '.';
import { mount } from 'enzyme';

it('renders without crashing', () => {
  const component = mount(
    <Title />
  );
});

it('render component correctly', () => {

  const component = mount(
    <Title />
  );

  const titleComponent = component.find('h1.title');
  const subtitleComponent = component.find('h2.subtitle');

  expect(titleComponent.text()).toBe('Pokédex');
  expect(subtitleComponent.text()).toBe('Pokémon database built on React')
});