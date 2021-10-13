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
Todos os testes devem passar com os pares de seletor/condição corretos.

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
  -> Botão para próximo ditado: "btn-next"
  -> Botão para ditado anterior: "btn-prev"
  -> Botão para desfavoritar: "btn-unfavorite"
  -> Ditado: "ditado"
==================Complete aqui!===================
*/

const isFavorite = ', como diria o velho ditado!';
const firstDitado = ditados[0];

describe('Testando o comportando do aplicativo ao ser inicializado', () => {
  it('deve renderizar o primeiro ditado', () => {
    render(<Home />);

    expect(
      screen.getByTestId('ditado'),
    ).toBeInTheDocument();

    expect(
      screen.getByText(firstDitado),
    ).toBeInTheDocument();

    expect(
      screen.getAllByText(firstDitado),
    ).toHaveLength(1);
  });

  it('deve renderizar a description', () => {
    render(<Home />);

    expect(
      screen.getByRole('heading'),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading').textContent,
    ).toBe(description);

    expect(
      screen.getByText(description),
    ).toBeInTheDocument();
  });

  it('deve renderizar dois botões', () => {
    render(<Home />);

    expect(
      screen.getAllByRole('button').length,
    ).toBe(2);
  });
});

describe('Testando o comportamento dos botões de navegação', () => {
  it('se há 2 botões de navegação', () => {
    render(<Home />);

    expect(
      screen.getAllByRole('button'),
    ).toHaveLength(2);
  });

  it('botão de passar para o próximo ditado deve exibir o próximo ditado', () => {
    render(<Home />);

    expect(
      screen.getByText(firstDitado),
    ).toBeInTheDocument();

    fireEvent.click(
      screen.getByTestId('btn-next'),
    );

    expect(
      screen.getByText(ditados[1]),
    ).toBeInTheDocument();
  });

  it('botão de passar para o ditado anterior deve exibir o ditado anterior', () => {
    render(<Home />);

    expect(
      screen.getByText(firstDitado),
    ).toBeInTheDocument();

    fireEvent.click(
      screen.getByTestId('btn-next'),
    );

    expect(
      screen.getByText(ditados[1]),
    ).toBeInTheDocument();

    fireEvent.click(
      screen.getByTestId('btn-prev'),
    );

    expect(
      screen.getByTestId('ditado').textContent,
    ).toBe(firstDitado);
  });
});

describe('Testando a funcionalidade de favoritar/desfavoritar um ditado', () => {
  it('favoritar um ditado ao clicar duas vezes sobre o texto', () => {
    render(<Home />);

    fireEvent.doubleClick(
      screen.getByTestId('ditado'),
    );

    expect(
      screen.getByText(`${firstDitado}${isFavorite}`),
    ).toBeInTheDocument();
  });

  it('desfavoritar um ditado ao clicar no botão Balela', () => {
    render(<Home />);

    fireEvent.doubleClick(
      screen.getByTestId('ditado'),
    );

    expect(
      screen.getByText(`${firstDitado}${isFavorite}`),
    ).toBeInTheDocument();

    fireEvent.click(
      screen.getByTestId('btn-unfavorite'),
    );

    expect(
      screen.getByText(firstDitado),
    ).toBeInTheDocument();
  });

  it('ditado continua favoritado se usuário navega por outros ditados', () => {
    render(<Home />);

    fireEvent.doubleClick(
      screen.getByTestId('ditado'),
    );

    expect(
      screen.getByText(`${firstDitado}${isFavorite}`),
    ).toBeInTheDocument();

    fireEvent.click(
      screen.getByTestId('btn-next'),
    );

    expect(
      screen.getByText(ditados[1]),
    ).toBeInTheDocument();

    fireEvent.click(
      screen.getByTestId('btn-prev'),
    );

    expect(
      screen.getByText(`${firstDitado}${isFavorite}`),
    ).toBeInTheDocument();
  });
});

describe('Testando o looping dos ditados', () => {
  it('deve renderizar todos os ditados e voltar para o primeiro', () => {
    render(<Home />);

    expect(
      screen.getByTestId('ditado').textContent,
    ).toBe(firstDitado);

    ditados.forEach((ditado) => {
      expect(
        screen.getByText(ditado),
      ).toBeInTheDocument();

      fireEvent.click(
        screen.getByTestId('btn-next'),
      );
    });

    expect(
      screen.getByTestId('ditado').textContent,
    ).toBe(firstDitado);
  });
});
