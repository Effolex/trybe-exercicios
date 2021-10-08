import React from "react";
import pokemons from './data';
import Pokemon from "./pokemon";

export default class Pokedex extends React.Component {
  render() {

    const pokedexElements = pokemons.map((pokemon) => (
      <Pokemon pokemon={pokemon} />
    ))

    return <ul key='pokedex' className='pokedex'>{pokedexElements}</ul>
  }
}