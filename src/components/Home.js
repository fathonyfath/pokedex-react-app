import React, { Component } from 'react';
import Title from './Title';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GenerationFilter from './GenerationFilter';
import PokemonCardList from './PokemonCardList';
import * as pokemonActions from '../actions/pokemonActions';

class Home extends Component {

  constructor(props) {
    super(props);

    this.pokemonList = [
      {
        pokemonId: 1,
        pokemonImageUrl: 'http://lorempixel.com/200/200/',
        pokemonName: 'Pikachu 1'
      },
      {
        pokemonId: 2,
        pokemonImageUrl: 'http://lorempixel.com/200/200/',
        pokemonName: 'Pikachu 2'
      },
      {
        pokemonId: 3,
        pokemonImageUrl: 'http://lorempixel.com/200/200/',
        pokemonName: 'Pikachu 3'
      },
      {
        pokemonId: 4,
        pokemonImageUrl: 'http://lorempixel.com/200/200/',
        pokemonName: 'Pikachu 4'
      },
      {
        pokemonId: 5,
        pokemonImageUrl: 'http://lorempixel.com/200/200/',
        pokemonName: 'Pikachu 5'
      },
      {
        pokemonId: 6,
        pokemonImageUrl: 'http://lorempixel.com/200/200/',
        pokemonName: 'Pikachu 6'
      },
      {
        pokemonId: 7,
        pokemonImageUrl: 'http://lorempixel.com/200/200/',
        pokemonName: 'Pikachu 7'
      },
      {
        pokemonId: 8,
        pokemonImageUrl: 'http://lorempixel.com/200/200/',
        pokemonName: 'Pikachu 8'
      }
    ];
  }

  componentDidMount() {
    this.props.actions.fetchPokemon();
  }

  render() {
    return (
      <div>
        <Title />
        <GenerationFilter />
        <PokemonCardList pokemonList={this.pokemonList} />
      </div>
    );
  }
}

const mapStateToProps = null;
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(pokemonActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
