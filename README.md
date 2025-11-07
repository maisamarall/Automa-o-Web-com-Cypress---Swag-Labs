# 🧪 Automação Web com Cypress - SauceDemo

Este projeto contém testes automatizados desenvolvidos em **Cypress** para validar as principais funcionalidades do site [SauceDemo](https://www.saucedemo.com/).

---

## 👩‍💻 Discente:
**Nome:** Maisa Amaral  
**RA:** 1997058
**Disciplina:** Teste e Qualidade de Software

---

## 🧠 Objetivo
Automatizar os testes das funcionalidades principais do e-commerce **SauceDemo**, garantindo que o fluxo do usuário funcione corretamente — desde o login até o checkout.

---

## 📁 Estrutura do Projeto

cypress/
└── e2e/
├── login.cy.js # Testes da tela de login
├── products.cy.js # Testes da listagem e ordenação de produtos
├── cart.cy.js # Testes do carrinho de compras
└── checkout.cy.js # Testes do fluxo de checkout
cypress.config.js # Configuração do Cypress
package.json # Dependências do projeto

---

## 🧾 Funcionalidades Testadas

| Módulo       | Cenário                    | Descrição                               |
| ------------ | -------------------------- | --------------------------------------- |
| **Login**    | Credenciais válidas        | Login bem-sucedido                      |
|              | Senha inválida             | Exibe mensagem de erro                  |
|              | Usuário bloqueado          | Exibe “user has been locked out”        |
|              | Campos vazios              | Impede login e exibe alerta             |
| **Produtos** | Exibição da lista          | Todos os produtos aparecem              |
|              | Ordenação A → Z e Z → A    | Lista é ordenada corretamente           |
| **Carrinho** | Adicionar/Remover produtos | Contador e itens atualizam corretamente |
| **Checkout** | Preencher dados            | Redireciona para revisão                |
|              | Campos vazios              | Exibe erro obrigatório                  |
|              | Finalizar compra           | Exibe mensagem de sucesso               |
|              | Cancelar checkout          | Retorna para a lista de produtos        |

---

## 🧩 Tecnologias Utilizadas

- Cypress (versão 15 ou superior recomendada)
- Node.js (versão 20+)
- Automation Exercise API (https://fakestoreapi.com)

## ▶ Como Executar o Projeto

Clone o repositório:

git clone https://github.com/maisamarall/Automa-o-Web-com-Cypress
Instale as dependências:
npm install
Execute os testes:

Modo interativo:

npx cypress open
Modo headless (terminal):

npx cypress ru
