import React, { Component } from 'react';
import Title from './Title';
import { connect } from 'react-redux';
import { Dimmer, Loader } from 'semantic-ui-react';
import GenerationFilter from './GenerationFilter';
import PokemonCardList from './PokemonCardList';
import PokemonDetail from './PokemonDetail';

class Home extends Component {

  constructor(props) {
    super(props);

    this.onItemClick = this.onItemClick.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.state = {
      open: false
    }

    this.pokemonSample = {
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
  }

  onItemClick(e, data) {
    this.setState({ open: true });
  }

  closeModal() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <Dimmer active={false}>
          <Loader />
        </Dimmer>
        <Title />
        <GenerationFilter />
        <PokemonCardList onClick={this.onItemClick} />
        <PokemonDetail onClose={this.closeModal} open={this.state.open} pokemon={this.pokemonSample} />
      </div>
    );
  }
}

export default connect()(Home);
