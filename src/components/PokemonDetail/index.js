import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';
import DetailContent from './DetailContent';

class PokemonDetail extends Component {
  constructor(props) {
    super(props);

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  open() {
    if (this.props.onOpen) {
      this.props.onOpen();
    }
  }

  close() {
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  render() {
    const pokemon = this.props.pokemon;
    return (
      <Modal
        size='tiny'
        open={this.props.open}
        onOpen={this.open}
        onClose={this.close}>
        <Modal.Header className='window-title'>Pokémon details</Modal.Header>
        <Modal.Content>
          <DetailContent pokemon={pokemon} />
        </Modal.Content>
      </Modal>
    );
  }
}

export default PokemonDetail;