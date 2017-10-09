import React from 'react';
import Home from './Home';
import { shallow } from 'enzyme';
import buildStore from '../store';
import { Provider } from 'react-redux';

it('renders without crashing', () => {
  const store = buildStore();
  const context = { store };

  shallow(<Home />, { context });
});