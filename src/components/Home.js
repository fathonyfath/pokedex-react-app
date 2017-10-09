import React, { Component } from 'react';
import Title from './Title';
import { connect } from 'react-redux';
import { Modal, Image, Header } from 'semantic-ui-react';
import GenerationFilter from './GenerationFilter';
import PokemonCardList from './PokemonCardList';

class Home extends Component {

  constructor(props) {
    super(props);

    this.showConsole = this.showConsole.bind(this);
  }

  showConsole(e, data) {
    console.log('data', data);
  }

  render() {
    return (
      <div>
        <Title />
        <GenerationFilter />
        <PokemonCardList onClick={this.showConsole} />
      </div>
    );
  }
}

export default connect()(Home);
