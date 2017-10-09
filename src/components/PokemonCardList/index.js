import React, { Component } from 'react';
import { Grid, Loader } from 'semantic-ui-react';
import PokemonCard from './PokemonCard';
import InfiniteScroll from 'react-infinite-scroller';

import { connect } from 'react-redux';
import * as pokemonActions from '../../actions/pokemonActions';
import { bindActionCreators } from 'redux';

class PokemonCardList extends Component {
  constructor(props) {
    super(props);

    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    if(this.props.filter === 'all-generation') {
      this.props.actions.fetchPokemon(this.props.offset);
    } else {
      this.props.actions.fetchPokemonGeneration(this.props.filter);
    }
  }

  render() {
    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.loadMore}
        loader={<Grid container><Grid.Row><Loader active inline='centered' /></Grid.Row></Grid>}
        hasMore={this.props.hasMore}
        useWindow={true}>
        <Grid columns='4' container>
          {this.props.pokemonList.map((pokemon, index) =>
            <PokemonCard key={index} pokemonId={pokemon.pokemonId} pokemonImageUrl={pokemon.pokemonImageUrl} pokemonName={pokemon.pokemonName} />
          )}
        </Grid>
      </InfiniteScroll>
    );
  }
}

const mapStateToProps = (state) => ({
  totalSize: state.pokemonList.totalPokemonCount,
  pokemonList: state.pokemonList.pokemonList, 
  hasMore: state.pokemonList.hasMoreItem, 
  offset: state.pokemonList.offset,
  filter: state.pokemonList.filter
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(pokemonActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonCardList);