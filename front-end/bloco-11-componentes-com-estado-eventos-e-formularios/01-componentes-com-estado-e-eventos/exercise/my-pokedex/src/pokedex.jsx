import React from "react";
import pokemons from './data';
import Pokemon from "./pokemon";

export default class Pokedex extends React.Component {

  constructor() {
    super();
    this.state = {
      pokeList: '',
    }
    this.handleSearch = this.handleSearch.bind(this);
  }
  
  componentDidMount() {
    this.setState({pokeList:  pokemons.map((element) => (<Pokemon pokemon={element} />))})
  }

  handleSearch(event) {
    const caracters = event.target.value.toLowerCase();
    const list = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(caracters));
    this.setState((state) => ({
      pokeList: list.map((element) => (<Pokemon key={element.name} pokemon={element} />)),
    }))
  }

  render() {

    return (
      <> 
        <input onChange={this.handleSearch}></input>
        <ul key='pokedex' className='pokedex'>{this.state.pokeList}</ul>
      </>
    )
  }
}