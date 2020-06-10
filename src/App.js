import React from 'react';
import './App.css';



class Pokemon extends React.Component {
  constructor (props){
    super(props)

    this.state = {
      pokemonTypes: null,
    };
  }

  async componentDidMount() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon-form');
    const pokemonTypes = await response.json();
  
    this.setState({
      pokemonTypes: pokemonTypes.results,
    })
  }

  componentDidUpdate(){
    
  }

  render() {
    if (this.state.pokemonTypes === null){
       return "...Loading..."

      }
  return (
    <ul>
      {this.state.pokemonTypes.map((type) => (
        <li key={Math.round(Math.random()*10000)}>
          {type.name} 
        </li>
      ))}
    </ul>
  );
  }
};

export default Pokemon;
