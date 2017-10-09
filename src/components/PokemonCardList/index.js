import React, { Component } from 'react';
import { Grid, Loader } from 'semantic-ui-react';
import PokemonCard from './PokemonCard';
import InfiniteScroll from 'react-infinite-scroller';

class PokemonCardList extends Component {
  constructor(props) {
    super(props);

    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    console.log("Load more method.");
  }

  render() {
    if (!this.props.pokemonList || !this.props.pokemonList.length) {
      return (<h1>Pokemon not found</h1>);
    }

    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.loadMore}
        loader={<Loader active inline='centered' />}
        hasMore={true}
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

export default PokemonCardList;