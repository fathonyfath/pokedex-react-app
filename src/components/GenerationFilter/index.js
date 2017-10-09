import React, { Component } from 'react';
import { Dropdown, Segment, Container } from 'semantic-ui-react';

import { connect } from 'react-redux';
import * as pokemonActions from '../../actions/pokemonActions';
import { bindActionCreators } from 'redux';

class GenerationFilter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dropdown: [
        {
          text: 'All Generation', 
          value: 'all-generation'
        }, 
        {
          text: 'Generation I',
          value: 'generation-i'
        },
        {
          text: 'Generation II',
          value: 'generation-ii'
        }, 
        {
          text: 'Generation III',
          value: 'generation-iii'
        }, 
        {
          text: 'Generation IV',
          value: 'generation-iv'
        }, 
        {
          text: 'Generation V',
          value: 'generation-v'
        }, 
        {
          text: 'Generation VI',
          value: 'generation-vi'
        }
      ]
    };

    this.onItemChanged = this.onItemChanged.bind(this);
  }

  onItemChanged(e, data) {
    this.props.actions.clearPokemonList();
    this.props.actions.setGenerationFilter(data.value);
  }

  render() {
    return (
      <Container>
        <Segment vertical>
          <Dropdown placeholder='Select a generation...' fluid selection options={this.state.dropdown} onChange={this.onItemChanged} />
        </Segment>
      </Container>
    );
  }

}

const mapStateToProps = null;
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(pokemonActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(GenerationFilter);