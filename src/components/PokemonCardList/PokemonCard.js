import React, { Component } from 'react';
import { Grid, Image, Card } from 'semantic-ui-react';

class PokemonCard extends Component {
  constructor(props) {
    super(props);

    this.sendToParent = this.sendToParent.bind(this);
  }


  sendToParent(e) {
    this.props.onClick(e, { pokemonId: this.props.pokemonId })
  }

  render() {
    return (
      <Grid.Column>
        <Card onClick={this.sendToParent}>
          <Image centered className='pokemon-image' src={this.props.pokemonImageUrl} />
          <Card.Content>
            <Card.Header className='pokemon-name' textAlign='center'>{this.props.pokemonName}</Card.Header>
          </Card.Content>
        </Card>
      </Grid.Column>
    );
  }
}

export default PokemonCard;