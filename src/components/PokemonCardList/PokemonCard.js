import React, { Component } from 'react';
import { Grid, Image, Card } from 'semantic-ui-react';

class PokemonCard extends Component {
  constructor(props) {
    super(props);

    this.showAlert = this.showAlert.bind(this);
  }


  showAlert(e) {
    e.preventDefault();
    console.log('Pokemon Id', this.props.pokemonId);
  }

  render() {
    return (
      <Grid.Column>
        <Card onClick={this.showAlert}>
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