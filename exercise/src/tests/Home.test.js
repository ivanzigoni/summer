import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ditados, description } from '../data';
import Home from '../pages/home/Home';

/*
=============================================README=======================================================
Este exercício está dividido em 3 partes.

Parte 1 -> navegue até o código da aplicação, veja quais IDs de teste foram utilizados e complete
a lista abaixo para usar como consulta durante a implementação dos testes.

Parte 2 -> complete os testes do primeiro describe completando a lacuna dos seletores e/ou das condições.
Todos os testes devem passar com os pares de seletor/condições corretos.

Parte 3 -> complete ou desenvolva os testes do segundo e terceiro describe. O que deve ser testado
já está especificado na descrição dos its.

Há um exercício bônus após o terceiro describe!
=============================================README======================================================

=======CONSULTA========
Alguns seletores:
  -> getByText
  -> getAllByText
  -> getByRole
  -> getAllByRole
  -> getByTestId

Algumas condições:
  -> toBeInTheDocument
  -> toHaveLength
  -> toBe
=======CONSULTA========

==================Complete aqui!===================
IDs de teste utilizados na aplicação (data-testid):
  -> Botão para próximo ditado:
  -> Botão para ditado anterior:
  -> Botão para desfavoritar:
  -> Ditado:
==================Complete aqui!===================
*/

const isFavorite = ', como diria o velho ditado!';
const firstDitado = ditados[0];

describe('Testando o comportando do aplicativo ao ser inicializado', () => {
  // it('deve renderizar o primeiro ditado', () => {
  //   render(<Home />);

  //   expect(
  //     screen.get('ditado'),
  //   ).toBeInTheDocument();

  //   expect(
  //     screen.get(firstDitado),
  //   ).toBeInTheDocument();

  //   expect(
  //     screen.get(firstDitado),
  //   ).toHaveLength(1);
  // });

  // it('deve renderizar a description', () => {
  //   render(<Home />);

  //   expect(
  //     screen.get('heading'),
  //   ).to();

  //   expect(
  //     screen.get('heading').textContent,
  //   ).to(description);

  //   expect(
  //     screen.get(description),
  //   ).to();
  // });

  // it('deve renderizar dois botões', () => {
  //   render(<Home />);

  //   expect(
  //     screen.get('button').length,
  //   ).to(2);
  // });
});

describe('Testando o comportamento dos botões de navegação', () => {
  // it('se há 2 botões de navegação', () => {
  //   render(<Home />);

  //   expect(
  //     screen.get('button'),
  //   ).to(2);
  // });

  // it('botão de passar para o próximo ditado deve exibir o próximo ditado', () => {
  //   render(<Home />);

  //   expect(
  //     screen.get(firstDitado),
  //   ).to();

  //   fireEvent.click(
  //     screen.getByTestId('btn-next'),
  //   );

  //   expect(
  //     screen.get(ditados[1]),
  //   ).to();
  // });

  // it('botão de passar para o ditado anterior deve exibir o ditado anterior', () => {
  //   render(<Home />);

  //   expect(
  //     screen.get(firstDitado),
  //   ).to();

  //   fireEvent.click(
  //     screen.get('btn-next'),
  //   );

  //   expect(
  //     screen.get(ditados[1]),
  //   ).to();

  //   fireEvent.click(
  //     screen.getByTestId(),
  //   );

  //   expect(
  //     screen.get('ditado').textContent,
  //   ).toBe();
});

describe('Testando a funcionalidade de favoritar/desfavoritar um ditado', () => {
  // it('favoritar um ditado ao clicar duas vezes sobre o texto', () => {
  //   render(<Home />);

  //   fireEvent.doubleClick(
  //     screen.getByTestId('ditado'),
  //   );

  //   expect(
  //     screen.get(`${firstDitado}${isFavorite}`),
  //   ).to();
  // });

  // it('desfavoritar um ditado ao clicar no botão Balela', () => {
  //   expect(
  //     screen.get(`${firstDitado}${isFavorite}`),
  //   ).to();

  //   fireEvent.click(
  //     screen.getByTestId(),
  //   );

  //   expect(
  //     screen.get(firstDitado),
  //   ).to();
  // });

  // it('ditado continua favoritado se usuário navega por outros ditados', () => {
  // });
});

/*
======================================BÔNUS=================================================
Aqui você deve checar se todos os ditados do array são renderizados na tela na ordem correta.
Caso o ultimo ditado esteja na tela e seja pressionado o botão para exibir o próximo,
o primeiro ditado deve ser renderizado, completando uma iteração.

dica: é possível automatizar os cliques e os expects usando um forEach.
======================================BÔNUS=================================================
*/

describe('Testando o looping dos ditados', () => {
  // it('deve renderizar todos os ditados e voltar para o primeiro', () => {
  //   render(<Home />);
  // });
});
