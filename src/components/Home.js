import React, { Component } from 'react';
import Title from './Title';
import GenerationFilter from './GenerationFilter';
import PokemonCardList from './PokemonCardList';

class Home extends Component {
  
    constructor(props) {
      super(props);
      
      this.pokemonList = [
        {
          pokemonId: 1, 
          pokemonImageUrl: 'http://lorempixel.com/200/200/', 
          pokemonName: 'Pikachu 1'
        }, 
        {
          pokemonId: 2, 
          pokemonImageUrl: 'http://lorempixel.com/200/200/', 
          pokemonName: 'Pikachu 2'
        }, 
        {
          pokemonId: 3, 
          pokemonImageUrl: 'http://lorempixel.com/200/200/', 
          pokemonName: 'Pikachu 3'
        }, 
        {
          pokemonId: 4, 
          pokemonImageUrl: 'http://lorempixel.com/200/200/', 
          pokemonName: 'Pikachu 4'
        }, 
        {
          pokemonId: 5, 
          pokemonImageUrl: 'http://lorempixel.com/200/200/', 
          pokemonName: 'Pikachu 5'
        }, 
        {
          pokemonId: 6, 
          pokemonImageUrl: 'http://lorempixel.com/200/200/', 
          pokemonName: 'Pikachu 6'
        }, 
        {
          pokemonId: 7, 
          pokemonImageUrl: 'http://lorempixel.com/200/200/', 
          pokemonName: 'Pikachu 7'
        }, 
        {
          pokemonId: 8, 
          pokemonImageUrl: 'http://lorempixel.com/200/200/', 
          pokemonName: 'Pikachu 8'
        }
      ];
    }
  
    render() {
      return (
        <div>
          <Title />
          <GenerationFilter />
          <PokemonCardList pokemonList={this.pokemonList} />
        </div>
      );
    }
  }
  
  export default Home;
  