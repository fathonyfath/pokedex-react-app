import React, { Component } from 'react';
import {
  Container,
  Header,
  Segment
} from 'semantic-ui-react'

class Title extends Component {
  render() {
    return (
      <Segment inverted textAlign='center' vertical>
        <Container text>
          <Header
            className='title'
            as='h1'
            content='Pokédex'
            inverted />

          <Header
            className='subtitle'
            as='h2'
            content='Pokémon database built on React'
            inverted />
        </Container>
      </Segment>
    );
  }
}

export default Title;