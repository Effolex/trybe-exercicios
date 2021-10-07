import React from "react";
import pokemons from './data';

export default class Pokedex extends React.Component {
  render() {

    const pokedexElements = pokemons.map(({id, name, type, averageWeight, image, moreInfo}) => (
      <li key={id} className='pokemon'>
        <div className='descripton'>
        <p>{name}</p>
        <p>{type}</p>
        <p>{averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
        <img src={image}></img>
      </li>
    ))

    return <ul key='pokedex' className='pokedex'>{pokedexElements}</ul>
  }
}