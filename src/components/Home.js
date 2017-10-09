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

  }

  componentDidMount() {
    this.props.actions.fetchPokemon();
  }

  render() {
    return (
      <div>
        <Title />
        <GenerationFilter />
        <PokemonCardList pokemonList={this.props.pokemonList} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pokemonList: state.pokemonList.pokemonList
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(pokemonActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
