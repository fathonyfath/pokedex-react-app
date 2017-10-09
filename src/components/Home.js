import React, { Component } from 'react';
import Title from './Title';
import { connect } from 'react-redux';
import { Dimmer, Loader } from 'semantic-ui-react';
import GenerationFilter from './GenerationFilter';
import PokemonCardList from './PokemonCardList';
import PokemonDetail from './PokemonDetail';
import * as pokemonActions from '../actions/pokemonActions';
import { bindActionCreators } from 'redux';

class Home extends Component {

  constructor(props) {
    super(props);

    this.onItemClick = this.onItemClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  onItemClick(e, data) {
    this.props.actions.fetchPokemonDetail(data.pokemonId);
  }

  closeModal() {
    this.props.actions.clearPokemonDetail();
  }

  render() {
    return (
      <div>
        <Dimmer page active={this.props.showingLoading}>
          <Loader />
        </Dimmer>
        <Title />
        <GenerationFilter />
        <PokemonCardList onClick={this.onItemClick} />
        <PokemonDetail onClose={this.closeModal} open={this.props.showingModal} pokemon={this.props.pokemonData} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  showingLoading: state.pokemonDetail.showLoading,
  showingModal: state.pokemonDetail.showModal,
  pokemonData: state.pokemonDetail.pokemonData
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(pokemonActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
