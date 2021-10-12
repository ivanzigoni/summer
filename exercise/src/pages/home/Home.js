import React, { Component } from 'react';
import { ditados, description } from '../../data';
import './home.css';

/*
=========================================README===============================================
Este é um aplicativo simples com algumas poucas funcionalidades.

A pessoa usuária dispõe de 4 principais ações:
  -> Ver o próximo ditado,
  -> Ver o ditado anterior,
  -> Favoritar um ditado,
  -> Desfavoritar um ditado,

Inicialize a aplicação e veja como ela se comporta e se ela funciona.
Dê uma olhada no código e compreenda sua funcionalidade.

Notas:
  -> os ditados e a descrição são importados de data.js,
  -> passar para o próximo ditado estando no último ditado da lista leva a pessoa de volta
  para o primeiro ditado da lista,
  -> passar para o ditado anterior estando no primeiro ditado da lista leva a pessoa de volta
  para o ultimo ditado da lista,

Dê uma olhada no arquivo data.js para entender o formato da data utilizada na aplicação.
Depois disso, os exercícios serão realizados no arquivo src/tests/Home.test.js.
=========================================README===============================================
*/

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ditado: ditados[0],
      currentIndex: 0,
      favorites: [],
    };
  }

nextDitado = () => {
  const { currentIndex } = this.state;
  const index = currentIndex + 1;
  const firstDitado = ditados[0];

  if (index >= ditados.length) {
    this.setState({
      ditado: firstDitado,
      currentIndex: 0,
    });
    return;
  }

  this.setState({
    ditado: (ditados[index]),
    currentIndex: index,
  });
}

prevDitado = () => {
  const { currentIndex } = this.state;
  const index = currentIndex - 1;
  const lastDitado = ditados[ditados.length - 1];

  if (index < 0) {
    this.setState({
      ditado: lastDitado,
      currentIndex: ditados.length - 1,
    });
    return;
  }

  this.setState({
    ditado: ditados[index],
    currentIndex: index,
  });
}

setFavorite = (ditado) => {
  this.setState((prev) => ({ favorites: [...prev.favorites, ditado] }));
}

unFavorite = (ditado, favorites) => {
  const newFavorites = favorites.filter((dit) => dit !== ditado);
  this.setState({ favorites: newFavorites });
}

unFavoriteBtn = (ditado, favorites) => {
  if (favorites.includes(ditado)) {
    return (
      <button
        type="button"
        data-testid="btn-unfavorite"
        onClick={ () => this.unFavorite(ditado, favorites) }
      >
        Balela!
      </button>
    );
  }
}

isFavorite = (ditado, favorites) => (
  favorites.includes(ditado) ? ', como diria o velho ditado!' : ''
);

renderDitado = (ditado, favorites) => (
  <p
    onDoubleClick={ () => this.setFavorite(ditado) }
    data-testid="ditado"
    className="noSelect"
  >
    {!ditado || ditado === '' ? ditados[0] : ditado}
    {this.isFavorite(ditado, favorites)}
  </p>
)

renderButtons = (ditado, favorites) => (
  <nav>
    <button
      type="button"
      data-testid="btn-prev"
      onClick={ this.prevDitado }
    >
      Anterior

    </button>
    <button
      type="button"
      data-testid="btn-next"
      onClick={ this.nextDitado }
    >
      Próximo
    </button>
    {this.unFavoriteBtn(ditado, favorites)}
  </nav>
)

render() {
  const { ditado, favorites } = this.state;
  return (
    <main className="main">
      <header className="header">
        <h3>{description}</h3>
        {this.renderButtons(ditado, favorites)}
      </header>
      <section className="section">
        {this.renderDitado(ditado, favorites)}
      </section>
    </main>
  );
}
}
