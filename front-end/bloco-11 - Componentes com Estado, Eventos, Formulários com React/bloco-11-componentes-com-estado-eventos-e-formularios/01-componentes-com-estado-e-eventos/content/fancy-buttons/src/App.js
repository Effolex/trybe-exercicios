import React from 'react';
import './App.css';

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      contador: 0,
    }
    this.contador = 0;
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    console.log('Clicou no botão!')
    this.contador++;
    console.log(this.contador);
  }
  
  handleClickSecondButton = () => {
    console.log('Clicou no botão 2!')
    const newValue = (this.state.contador)+1;
    this.setState({contador: newValue})
  }
  
  handleClickThirdButton() {
    console.log('Clicou no botão 3!')
  }

  render() {
    return (
      <> 
        <button onClick={this.handleClick}>Meu botão {this.contador}</button>
        <button onClick={this.handleClickSecondButton}>Meu botão {this.state.contador}</button>
        <button onClick={this.handleClickThirdButton}>Meu botão 3</button>
      </>
    )
  }
}

export default App;