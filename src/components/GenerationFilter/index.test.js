import React from 'react';
import GenerationFilter from './';
import { mount } from 'enzyme';

it('renders without crashing', () => {
  mount(<GenerationFilter />);
});