## Sumário

- [O que vamos aprender](#o-que-vamos-aprender)[?](#o-que-vamos-aprender)
- [Você será capaz de](#você-será-capaz-de)
- [Por que testes são importantes?](#por-que-testes-são-importantes)
- [O que é a RTL](#o-que-é-a-rtl)
- [Getting started](#getting-started)
- [Seletores e condições](#seletores-e-condições)
  - [Etapa 1 -> render();](#etapa-1---render)
  - [Etapa 2 -> get;](#etapa-2---get)
  - [Etapa 3 -> expect();](#etapa-3---expect)
  - [Disparando eventos](#disparando-eventos)
- [Vamos praticar!](#vamos-praticar)
- [Conteúdos adicionais](#conteúdos-adicionais)
---

## O que vamos aprender?

Neste bloco, prepare-se para aprender os principais conceitos acerca da biblioteca de testes recomendada para aplicações construídas com React, a React Testing Library, ou RTL.

<br>[^](#sumário)


---

## Você será capaz de:

- Entender o que é a RTL,
- Compreender a importância dos testes na sua aplicação,
- Usar alguns dos principais seletores,
- Desenvolver testes usando a React Testing Library!

<br>[^](#sumário)

---

## Por que testes são importantes?

Imaginemos que você, pessoa que está lendo essa introdução, decida comprar um carro. Tenho certeza que mesmo sem pensar, você considera que aquele carro foi submetido a vários testes tanto em seu processo de design quanto em seu processo de montagem. Afinal de contas, dificilmente você gastaria todo esse dinheiro adquirindo um produto que não possui garantia de funcionamento!

As aplicações que você constrói dividem duas características com o carro: ambos são produtos, e ambos serão comprados por alguém! 

Agora imagine que você trabalhe na área administrativa de um renomado restaurante e lhe foi solicitado a aquisição e a negocição de um software para gerenciar os pedidos, promovendo a integração entre o salão e a cozinha. Assim como o carro, você com certeza buscará por alguém que consiga, além de te entregar o produto no tempo estipulado, garantir o seu funcionamento! Afinal de contas, pedidos perdidos, duplicados ou quaisquer outras falhas acarretariam em problemas que só não são inimagináveis porque provavelmente você já pensou muito bem neles.

Oferecer uma cobertura ampla, eficiente e eficaz de testes é a garantia de funcionamento do seu produto que é, neste caso, sua aplicação criada com tanto suor, dedicação e horas olhando para o VSCODE atrás daquele bug!

Por fim, se você chegou até aqui, grandes são as chances de já ter passado pelo projeto Frondend Online Store. Pense o quão mais fácil será refatorar ou adicionar novas features (ou novos requisitos) tendo os testes como apoio para saber se nada foi quebrado no processo!

Dessa forma, podemos concluir que testes são poderosas ferramentas que ajudam no processo de desenvovimento e excelentes garantias no processo de negociação e comercialização de um produto.

<br>[^](#sumário)

---

## O que é a RTL:

A React Testing Library é uma biblioteca utilizada para desenvolver testes no frontend de sua aplicação. Através de seletores, condições e disparos de eventos, a pessoa desenvolvedora é capaz de simular a interação de um usuário com a página e ter a garantia que os componentes renderizam as informações corretas, no momento certo.

Saiba que, apesar de não ser a única biblioteca de testes disponível para testar sua aplicação em React, é a ferramenta recomendada na [documentação](https://pt-br.reactjs.org/docs/testing.html) oficial. 

Você deve se lembrar da biblioteca [Jest](https://jestjs.io/). A RTL foi desenvolvida em cima do mesmo conceito e utiliza a simulação do DOM para prover um ambiente onde podemos testar a renderização das informações na tela da pessoa usuária.

Note que em nenhuma momento é falado sobre testes em funções propriamente ditas. Embora sejam disponíveis ferramentas para mockar atividades assíncronas, funções e promises, o objetivo sempre será analizar o que é renderizado, independente do processo e das lógicas utilizadas para isso.

<br>[^](#sumário)

---


## Getting started:

Instalar a biblioteca é fácil. Ela já vem instalada caso seu projeto tenha sido inicializado com o create-react-app. Caso não seja o caso, é possível adicionar via npm:
<br>

```
npm install --save-dev @testing-library/react
```

Com essa configuração, basta criar dentro da parta src/ arquivos de teste com sufixo .test.js. Embora seja possível alocar todos os testes da sua aplicação dentro de um só arquivo com nome aleatório (contanto que este termine em .test.js), consideremos as boas práticas e vamos fazer um arquivo para cada aspecto da página que queremos testar. Por exemplo:

Queremos testar as informações:

- Que são renderizadas na nossa página inicial em<br>
    Home.test.js

- Que são renderizadas na página de contato em<br>
    Contact.test.js

- Que são renderizadas na página sobre mim em<br>
    AboutMe.test.js

E é possível dar um passo a mais, agrupando todos os arquivos de teste dentro de uma pasta "tests":

📦src<br>
 ┗ 📂__tests__<br>
 ┃ ┣ 📜AboutMe.test.js<br>
 ┃ ┣ 📜Contact.test.js<br>
 ┃ ┗ 📜Home.test.js<br>

Lembre-se, várias formas de organização (inclusive a desorganização) podem efetivamente funcionar, mas tenha sempre um olhar de atenção para a escalabilidade da sua aplicação. Pastas bem organizadas e nomes descritivos são mecanismos para melhorar o processo de desenvolvimento para quem desensolve, ou seja, você!

<br>[^](#sumário)

---
## Seletores e condições ###

A lógica por trás de um teste é simples e pode ser dividida nas seguintes três etapas:

**Etapa 1** -> simular a renderização da página a ser testada

**Etapa 2** -> selecionar um elemento desta página

**Etapa 3** -> esperar algo deste elemento

Preste atenção! Perceba que na etapa 2 estamos selecionando apenas **um** elemento da página. Caso este elemento não exista na página, o teste irá falhar sem nem ao menos cair na etapa 3. Da mesma forma, o teste pode falhar caso o elemento tenha sido encontrado na simulação mas devolva um valor que não satisfaça a condição da etapa 3.

Essa informação é crucial para o entendimento dos testes porque assim como qualquer outro arquivo escrito em Javascript, na hora de executa-lo, o código é lido de cima para baixo. Ou seja, não adianta declarar todos os seletores no começo do arquivo dentro de algumas constantes e usá-los ao longo dos testes, porque pode ser que o seletor que você atribuiu ainda não esteja na página quando ela é renderizada. Pode ser, por exemplo, que seja um seletor que busca um elemento que só aparece após uma chamada a uma API. Ou que seja um seletor que busca um elemento que só aparece quando certo botão seja clicado.

Lembre-se, você está basicamente escrevendo, usando Javascript, as interações de uma pessoa usuária em sua aplicação.

<br>[^](#sumário)

---
### Etapa 1 -> render();
 <br>
render() é a função que deve ser chamada no começo de cada teste. Recebe como parâmetro um componente a ser renderizado na simulação. Caso precise de props para funcionar, é aí que entram os mocks. Sejam funções, listas ou qualquer informação em geral, é neste momento que você injeta o que é necessário para o funcionamento do componente. Neste conteúdo iremos trabalhar considerando que o componente já inicializa com o necessário sem o uso das props. Exemplo:
<br><br>

```
  // import AboutMe from './AboutMe';

  it('deve renderizar meu nome na página de About Me', () => {
    render(<AboutMe />)
    // seu teste aqui
  });
```

<br>
A partir do render(), considere que dentro do escopo do seu it/test a simulação está criada. Com esse ambiente criado, para acessa-lo a fim de desenvolver nossos testes, é necessário evidencia-lo com o <code>.screen</code>, que referencia justamente a árvore DOM simulada.

<br>[^](#sumário)

---

### Etapa 2 -> get;
<br>
Com a simulação pronta, devemos agora selecionar um elemento da página para testarmos. Pense nos seletores possuindo a funcionalidade similar ao <code>querySelector</code>, <code>getElementById</code> ou <code>getElementsByClassName</code>. A vantagem é que aqui temos algumas opções a mais! Durante essa introdução iremos trabalhar com alguns como <code>getByText</code>, <code>getAllByText</code>, <code>getByTestId</code> e <code>getByRole</code>.
<br>
<br>
Vamos dizer que, ao renderizar a página About Me, seu nome apareça na tela imediatamente. Você já sabe o seu nome porque é, digamos, seu portfólio. Portanto, é possível fazer da seguinte forma:
<br><br>

```
  it('deve renderizar meu nome na página de About Me', () => {
    render(<AboutMe />)
    const myName = screen.getByText('John Doe');
  });
```

Dessa maneira, renderizamos a página de AboutMe e logo em seguida estamos varrendo a página atrás do texto 'John Doe'. O retorno será o elemento que possuir esse texto.

Mas e se o conteúdo for gerado dinamicamente? Sabemos que algum texto deve ser exibido, mas não sabemos exatamente qual. Pode ser, por exemplo, que você queira informar à pessoa usuária seu horário e data de acesso. Dessa forma, sabemos que essa informação será dinamicamente gerada na renderização da página e nunca será a mesma. Não parece certo, neste caso, procurar por texto. Uma das soluções possíveis é através do atributo 'data-testid'. Os IDs de teste são identificadores inseridos no seu código (por você) para que seja possível selecionar aquele elemento especificamente na hora de testar a página. Logo, podemos fazer o seguinte:

Primeiro, sabemos que a informação (data e hora do dia) sempre será renderizada dentro de um determinado parágrafo:
<br>
```
  <p>{data}</p>
```

Não sabemos qual texto será renderizado, mas queremos ter certeza que ele esteja lá. Adicionamos um data-testid:
```
  <p data-testid="data-display">{data}</p>
```

E dessa forma, podemos acessar este elemento no teste com o seletor getByTestId:
```
  it('deve renderizar a hora de acesso na página de About Me', () => {
    render(<AboutMe />)
    const currentDate = screen.getByTestId('data-display');
  });
```
Agora, vamos considerar que você queira testar o título da sua página AboutMe. Sabemos que é possível capturar o texto diretamente, mas dessa vez queremos pegar por role. Sabemos que o título da sua página é um texto encapsulado em um ```<h1>```, ou um elemento de role heading e de level 1.
```
  <h1>John Doe</h1>
```
Dessa forma, podemos mirar nosso seletor na tag html ao invés do texto contido dentro dela da seguinte forma:
```
  it('deve renderizar o título', () => {
    render(<AboutMe />)
    const title = screen.getByRole('heading');
  });
```
Existe uma lista razoavelmente grande de roles. Esse seletor pode ser útil para atingir botões, headings, checkboxes e radio buttons. A [lista](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques) está disponível nos conteúdos adicionais.

Apesar de não usarmos no exercício deste bloco, é possível, também, adicionar mais filtros ao seletor <code>getByRole</code>, como por exemplo alguma propriedade de um botão (selected sendo true ou false) ou o level de um heading. Neste caso, o segundo parâmetro do seletor é um objeto com essas especificações. Por exemplo:
<br><br>

```
  it('deve renderizar um título em um heading h1, () => {
    render(<AboutMe />)
    const title = screen.getByRole('heading', { level: 1 });
  })
```

Selecionará somente as tags <code>h1</code>.

A lista de filtros que podem ser inseridos no objeto está [aqui](https://testing-library.com/docs/queries/byrole/). O link também estará nos conteúdos adicionais.

Maravilha! Vimos até agora alguns seletores que miram em elementos presentes na página e nos trazem um e somente um elemento em específico. Mas digamos agora que nossa página About Me contenha seu nome em dois locais diferentes. 'John Doe' aparece tanto no heading quanto no subtítulo de um artigo muito interessante que você resolveu deixar fixado. Dessa forma, temos:

Um heading com seu nome:
```
  <h1>John Doe</h1>
```
Um span pequenino como subtítulo do thumbnail do artigo:
```
  <span>John Doe</span>
```
Neste caso, não podemos usar o seletor normal, porque este texto existe em dois locais diferentes. Como vamos saber em qual dois iremos mirar? É aí que entra o prefixo getAll. Os seletores com getAll irão varrer a página e retornar um array com todos os elementos que correspondem a sua pesquisa. Exemplo:
```
  it('deve renderizar duas vezes o meu nome', () => {
    render(<AboutMe />)
    const title = screen.getAllByText('John Doe');
  });
```
Lembre-se, o retorno será um array! Portanto, você pode usar qualquer método próprio para acessar informações de um array. O array retornado é:
```
  [<h1>John Doe</h1>, <span>John Doe</span>];
```
Logo, sabemos que a posição <code>[0]</code> é o parágrafo, a posição <code>[1]</code> é o span e a length do array é 2.

Imagine as possibilidades! Use sua imaginação.

Digamos, agora, que em sua página About Me há uma lista de tecnologias que é atualizada à medida em que você aprende mais uma ferramenta. Já na sua página de Contact, para contato, são exibidos uma série de radio buttons onde a pessoa usuária pode escolher caso queria enviar uma pergunta sobre uma tecnologia em específico. Ou seja, você atualiza sua lista manualmente e espera que a quantidade de botões clicáveis seja manejada dinamicamente durante a renderização da página.

Uma ideia para verificar que são exibidas as mesmas quantidades de itens tanto na lista no About Me quanto no Contact é usar o seletor getAll nos seus testes e medir o tamanho do array de resposta. Exemplo:
<br>

```
  const techList = ['Javascript', 'MongoDB', 'React', 'RTL'];

  it('deve renderizar botões para todas as tecnologias', () => {
    render(<AboutMe />)
    const techRadios = screen.getAllByRole('radio');
  });
```
O retorno desse seletor será um array com todos os inputs radio presentes na página. Desta forma, basta conferir se a length de techList é igual a length de techRadios.

Note que quase todos (se não todos) os seletores possuem a versão getAll. A diferença é simplesmente que os seletores retornam um e apenas um elemento e os seletores com 'all' retornam um array.

<br>[^](#sumário)

---

### Etapa 3 -> expect();
<br>
Até agora nós renderizamos a nossa página e vimos como selecionar um elemento para testar suas propriedades. O que falta agora é, de fato, checar essas propriedades. Vamos chamar essa parte de condições. Caso seja <code>true</code>, o teste irá passar. Caso seja <code>false</code>, o teste irá falhar e apontar no console qual foi o resultado esperado (que você definiu) e o que o seletor trouxe de diferente.

A determinação do resultado esperado acontece dentro de um expect(). A lista de condições pode ser consultada na [folha de consulta](https://github.com/testing-library/react-testing-library/raw/main/other/cheat-sheet.pdf) oficial da documentação. Neste exemplo, iremos usar a .toBe, .toHaveLength e .toBeInTheDocument.

- .toBe() -> faz a comparação entre dois valores

- .toHaveLength() -> compara a length de um array com um valor (ahá!)

- .toBeInTheDocument() -> verifica se o elemento selecionado está na página

Vamos completar alguns exemplos passados.

Neste primeiro exemplo, renderizamos nossa página e utilizamos um seletor que varre a página e procura por um texto, atribuindo a uma constante o retorno dessa busca.
<br>

```
  it('deve renderizar meu nome na página de About Me', () => {
    render(<AboutMe />)
    const myName = screen.getByText('John Doe');
  });
```
Agora, esperamos que este resultado esteja na página. O que o seletor trás é inserido como parâmetro do expect() e a condição é encadeada logo depois.
<br>

```
  it('deve renderizar meu nome na página de About Me', () => {
    render(<AboutMe />)

    const myName = screen.getByText('John Doe');
    expect(myName).toBeInTheDocument();
  });
```
Sendo possível escrever de várias formas. No exercício deste conteúdo, você verá os testes seguindo o seguinte formato:
<br>

```
  it('deve renderizar meu nome na página de About Me', () => {
    render(<AboutMe />)
    
    expect(
      screen.getByText('John Doe');
    ).toBeInTheDocument();

  });
```
Também sendo possível dessa outra forma:
<br>

```
  it('deve renderizar meu nome na página de About Me', () => {
    render(<AboutMe />)
    
    expect(screen.getByText('John Doe')).toBeInTheDocument();

  });
```
Perceba que todos os métodos funcionam da mesma maneira.

Neste próximo exemplo, selecionamos nosso elemento com o role 'heading'. Após selecionarmos este elemento, podemos checar se o que está escrito é o que queremos que esteja escrito. Lembre-se que estamos trabalhando com ferramentas seletoras e ferramentas de condição. Como combiná-las a fim de realizar seus testes cabe inteiramente a você! Veja algumas verificações possíveis para testar se o texto correto é exibido no heading:
<br>

```
  const title = 'Meu Portfólio!'

  it('deve renderizar o título', () => {
    render(<AboutMe />)
    
    expect(
      screen.getByRole('heading').textContent,
    ).toBe(title);

  });
```


```
  it('deve renderizar o título', () => {
    render(<AboutMe />)
    
    expect(
      screen.getByRole('heading'),
    ).toHaveTextContent(title);

  });
```

Agora, vamos ver algumas verificações com seletores getAll. Lembre-se, eles retornam arrays.
<br>

```
  const techList = ['Javascript', 'MongoDB', 'React', 'RTL'];

  it('deve renderizar botões para todas as tecnologias', () => {
    render(<AboutMe />)
    
    expect(
      screen.getAllByRole('radio'),
    ).toHaveLength(techList.length)

  });
```

```
    it('deve renderizar botões para todas as tecnologias', () => {
    render(<AboutMe />)
    
    expect(
      screen.getAllByRole('radio').length,
    ).toBe(techList.length);

  });
```
Repare que das duas formas estamos verificando a length do array retornado e comparando com o valor.
É importante lembrar que os seletores buscam e retornam elementos HTML (DOM nodes) inteiros. Basicamente, o retorno é uma tag html com todas as suas propriedades. É possível pegar o .textContent no caso de texto ou até o .src e .alt caso se trate de uma imagem. O mesmo vale para os seletores getAll. Eles irão retornar um array... Populado desses elementos (ou vazio)!

<br>[^](#sumário)

---
### Disparando eventos

Você chegou até aqui. Parabéns. Até agora já vimos o render, vimos os seletores e também algumas condições. Você já se sente plenamente capaz de abrir seu projeto e compreender os testes assim como implementá-los em suas aplicações e portfólio!

Mas ainda nos resta uma nuance especial para que realmente possamos simular o comportamento de uma pessoa navegando em nossa página. Os eventos. É evidente a necessidade de testar se aquele botão super maneiro que você implementou na sua barra de navegação realmente traz uma lista de páginas para a pessoa usuária, ou se a pontuação daquele quiz realmente é computada na tela.

Para isso, podemos usar o disparador de eventos, o fireEvent. É simples, passamos para o fireEvent qual evento queremos que a simulação dispare e qual elemento deve receber esse evento, novamente utilizando seletores.

Digamos que na nossa página Contact, após o preenchimento e envio do formulário para contato, desejamos que seja renderizado na tela um pequeno parágrafo de agradecimento. Ou seja, depois de clicado o botão de envio, deve ser renderizado um novo elemento na tela com o texto "Agradeço seu contato. Responderei em breve no email fornecido!".

Usaremos o fireEvent. Como dito anteriormente, ele funciona mais ou menos assim:
<br>

```
  const submitButton = screen.getByRole('button');

  fireEvent.click(submitButton); // caso queira clicar uma vez
  fireEvent.doubleClick(submitButton); // caso queira clicar duas vezes
```
Há nos conteúdos adicionais links tanto para uma lista de eventos quanto para a documentação do fireEvent.<br>
*spoiler: é possível disparar até o evento de digitação de um teclado em campos de input de texto!*

Voltando ao exemplo. Vamos considerar que o formulário já tenha sido preenchido e queremos testar o comportamento somente do botão de envio. Este botão deve, ao ser clicado, inserir um novo elemento no nosso DOM, que será renderizado na tela da pessoa usuária.

Você se lembra quando foi salientada a importância de desenvolver seus seletores considerando o fluxo de atividades e interações da pessoa usuária na tela? Pois bem, agora será possível visualizar esse conceito com mais nitidez.
<br>

```
  const thankYouMsg = "Agradeço seu contato. Responderei em breve no email fornecido!";

  it('o botão de envio deve renderizar uma mensagem de agradecimento', () => {
    render(<Contact />)

    // formulário é preenchido

    expect(
      screen.getByText(thankYouMsg),
    ).toBeInTheDocument();

    fireEvent.click(
      screen.getByRole('button'),
    );

    expect(
      screen.getByText(thankYouMsg),
    ).toBeInTheDocument();

    });
```

Este teste falhará logo no seletor do primeiro expect, sem nem ao menos chegar na condição. E isso faz todo o sentido, afinal de contas, o texto só deve aparecer depois que o botão for apertado! Logo, perceba que renderizamos a página e já inserimos um seletor que podemos dizer estar quebrado justamente porque sua página está, neste caso, se comportando da forma esperada! Note como da maneira a seguir, é possível corrigir o problema de maneira simples:
<br>

```
  it('o botão de envio deve renderizar uma mensagem de agradecimento', () => {
    render(<Contact />)

    // formulário é preenchido

    fireEvent.click(
      screen.getByRole('button'),
    );

    expect(
      screen.getByText(thankYouMsg),
    ).toBeInTheDocument();

  });

  ```

Agora a página é renderizada, o botão é clicado e só em seguida entramos com o seletor e a condição. Dessa forma, não atropelamos a simulação.

<br>[^](#sumário)

---
## Vamos praticar! ###

Ótimo. Você chegou até aqui!

Espero que tenha entendido a importância dos testes e também os conceitos básicos para o fluxo de desenvolvimento.

Ainda há muito pela frente, mas é hora de praticar.

Clique [aqui](./exercise/readme.md) para navegar até o exercício.

<br>[^](#sumário)

---
## Conteúdos adicionais:

[Documentação oficial](https://testing-library.com/docs/react-testing-library/intro/)<br>
[Lista de bibliotecas para testes](https://geekflare.com/react-testing-library-utility/)<br>
[Lista de roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques)<br>
[Documentação fireEvent](https://testing-library.com/docs/dom-testing-library/api-events/)<br>
[Lista de eventos](https://www.w3schools.com/tags/ref_eventattributes.asp)<br>
[Propriedades getByRole](https://testing-library.com/docs/queries/byrole/)<br>
[Por que devo testar minha aplicação?](https://medium.com/android-dev-br/por-que-devo-testar-minhas-aplica%C3%A7%C3%B5es-3c169716d714)<br>
<br>[^](#sumário)

---