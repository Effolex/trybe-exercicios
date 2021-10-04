const react = require("react");
const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

export default class Content extends react.Component {
  
  render() {
    return (
      conteudos.map((content) => {
        const keys = Object.keys(content);
        return (
          <>
            <p>{keys[0]}: {content.conteudo}</p>
            <p>{keys[2]}: {content.status}</p>
            <p>{keys[1]}: {content.bloco}</p>
          </>
        )
      })
    )
  }
}