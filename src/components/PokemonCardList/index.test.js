import React from 'react';
import PokemonCardList from './';
import { shallow } from 'enzyme';
import buildStore from '../../store';

it('renders without crashing', () => {
  const store = buildStore();
  const context = { store };

  shallow(<PokemonCardList />, { context });
});