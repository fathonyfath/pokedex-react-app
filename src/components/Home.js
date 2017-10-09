import React, { Component } from 'react';
import Title from './Title';
import { connect } from 'react-redux';
import GenerationFilter from './GenerationFilter';
import PokemonCardList from './PokemonCardList';

class Home extends Component {

  render() {
    return (
      <div>
        <Title />
        <GenerationFilter />
        <PokemonCardList />
      </div>
    );
  }
}

export default connect()(Home);
