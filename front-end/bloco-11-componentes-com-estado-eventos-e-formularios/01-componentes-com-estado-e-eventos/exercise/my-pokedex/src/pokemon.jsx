import react from "react";

export default class Pokemon extends react.Component {
  render() {
    const {id, name, type, averageWeight, image, moreInfo} = this.props.pokemon;

    return (
      <li key={id} className='pokemon'>
        <div className='descripton'>
        <p>{name}</p>
        <p>{type}</p>
        <p>{`${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        </div>
        <img src={image}></img>
      </li>
    )

  }
}