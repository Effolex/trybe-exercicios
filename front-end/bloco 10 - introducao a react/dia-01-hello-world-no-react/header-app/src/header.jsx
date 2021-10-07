const react = require("react");


export default class Header extends react.Component {
  render() {
    const { titulo } = this.props;
    return (
      <h1>{titulo}</h1>
    )
  }
}