# Teste Técnico - Recomendador de Produtos RD Station

Este projeto é parte do teste técnico para a vaga de desenvolvedor front-end na RD Station. O objetivo principal é implementar a lógica de recomendação de produtos RD Station em uma aplicação web existente.

## Tecnologias Utilizadas

Este projeto utiliza as seguintes tecnologias principais:

- React.js: Para o desenvolvimento do front-end
- json-server: Para simular um servidor RESTful com dados de produtos
- Tailwind CSS: Para estilização e layout responsivo
- Github Actions: Para rodar testes automatizados em PRs
- React Testing Library: Para escrever testes unitários e de integração
- Typescript: Para melhorar a legibilidade e a consistência do código

## Funcionalidades

Recomendação de produtos

- A recomendação foi estruturada de modo a evitar consumo desnecessário de memória e processamento
- Foi aplicado memoização para reduzir o custo de uma atualização, evitando atualizações causadas por outros itens

Dark mode (Ativado pelo botão de switch)

- Foi utilizado um hook simples para gerir o funcionamento e persistência do tema escolhido
- Foram aplicadas classes para serem utilizadas no tema afim de reutilizar e simplificar a implementação do dark mode

CI

- Foi implementado um workflow simples, no Github Actions, para rodar os testes frontend do projeto nos PRs

## Como Executar

1. Clone o repositório: `git clone https://github.com/DeyversonDev/ProductRecommendation`
2. Instale as dependências: `yarn install`
3. Para instalar o projeto, execute o script `./install.sh`
4. Inicie a aplicação: `yarn start`

### Scripts Disponíveis

- `start`: Inicia a aplicação React em modo de desenvolvimento.
- `start:frontend`: Inicia apenas a parte frontend da aplicação em modo de desenvolvimento.
- `start:backend`: Inicia apenas a parte backend da aplicação em modo de desenvolvimento.
- `dev`: Inicia simultaneamente a parte frontend e backend da aplicação em modo de desenvolvimento.
