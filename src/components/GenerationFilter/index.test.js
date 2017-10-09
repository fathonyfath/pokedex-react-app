import React from 'react';
import GenerationFilter from './';
import { shallow } from 'enzyme';
import buildStore from '../../store';

it('renders without crashing', () => {
  const store = buildStore();
  const context = { store };

  shallow(<GenerationFilter />, { context });
});