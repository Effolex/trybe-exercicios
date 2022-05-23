import react from "react";
import icons from "./icons/icons";

export default class Pokemon extends react.Component {

  render() {
    const {id, name, type, averageWeight, image, moreInfo} = this.props.pokemon;

    return (
      <li key={id} className='pokemon'>
        <div className='description'>
        <p>{name}</p>
        <p>{type}</p>
        <p>{`${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        </div>
        <div className="image-container">
        <img className={`type ${type.toLowerCase()}`} src={icons[type.toLowerCase()]} alt="" />
        <img className="poke-img" src={`https://play.pokemonshowdown.com/sprites/xyani/${name.toLowerCase()}.gif`} />
        <img className="poke-shadow" src={`https://play.pokemonshowdown.com/sprites/xyani/${name.toLowerCase()}.gif`}></img>
        </div>
        
      </li>
    )

  }
}