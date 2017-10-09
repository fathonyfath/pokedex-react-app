import React, { Component } from 'react';
import { Image, Header, List, Grid } from 'semantic-ui-react';

class DetailContent extends Component {
  render() {
    const pokemon = this.props.pokemon;
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Header as='h3' className='pokemon-name'>#{pokemon.id} - {pokemon.name}</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>
            <Image centered
              className='pokemon-image'
              src={pokemon.imageUrl} />
          </Grid.Column>
          <Grid.Column width={6}>
            <h4>Types</h4>
            <List className='pokemon-types' bulleted>
              {pokemon.types.map((type, index) => <List.Item key={index}>{type}</List.Item>)}
            </List>
            <h4>Profile</h4>
            <List className='pokemon-profile'>
              <List.Item className='pokemon-weight'>Weight: {pokemon.weight}</List.Item>
              <List.Item className='pokemon-height'>Height: {pokemon.height}</List.Item>
              <List.Item className='pokemon-base-exp'>Base experience: {pokemon.baseExperience}</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={6}>
            <h4>Abilities</h4>
            <List className='pokemon-abilities' bulleted>
              {pokemon.abilities.map((ability, index) => <List.Item key={index}>{ability}</List.Item>)}
            </List>
            <h4>Stats</h4>
            <List className='pokemon-stats'>
              {pokemon.stats.map((stat, index) => <List.Item key={index}>{stat}</List.Item>)}
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default DetailContent;