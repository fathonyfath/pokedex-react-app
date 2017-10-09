import React, { Component } from 'react';
import { Dropdown, Segment, Container } from 'semantic-ui-react';

class GenerationFilter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dropdown: [
        {
          text: 'Generation I',
          value: 'generation-i'
        },
        {
          text: 'Generation II',
          value: 'generation-ii'
        }
      ]
    };
  }

  render() {
    return (
      <Container>
        <Segment vertical>
          <Dropdown placeholder='Select a generation...' fluid selection options={this.state.dropdown} />
        </Segment>
      </Container>
    );
  }

}

export default GenerationFilter;