# 🌱 Desafio Agroger - Prova Técnica
Gostaria de agradecer a Agroger pela oportunidade, com esse teste consegui evoluir meu conhecimento com react!

## 👋 Sobre o Projeto
Desenvolvi esta aplicação como teste técnico para demonstrar minhas habilidades com React. Ela permite visualizar e gerenciar uma lista de itens de forma dinâmica.

## ✨ O que o Sistema Faz

- Mostra uma lista inicial de itens assim que você abre a página

- Adiciona novos itens quando você clica no botão principal

- Atualiza automaticamente a tela com os novos elementos

- Funciona bem tanto no computador quanto no celular


### 🎁 Bônus (extra)
- Implementei a exclusão de itens (não era obrigatório)
- Animações suaves durante as ações

## 🛠️ Tecnologias Utilizadas
| Ferramenta | Finalidade |
|------------|------------|
| ![React](https://img.shields.io/badge/React-18-61DAFB) |
| ![Vite](https://img.shields.io/badge/Vite-4-646CFF) | 
| ![Axios](https://img.shields.io/badge/Axios-1.3-5A29E4) | 
| CSS Modules | Estilização |

## 🚀 Como Executar

# 1. Instalar dependências
npm install

# 2. Iniciar servidor local
npm start

# 3. Acessar no navegador
http://localhost:5173

### Como Está Organizado
Dividi o código em partes lógicas para ficar mais fácil de entender:

src/
├── components/    # Partes que se repetem (botões, cards)
├── pages/         # A tela principal
├── services/      # Tudo que conversa com a API
└── styles/        # O visual da aplicação

### Como Tudo Funciona
 **Quando abre a página:**

- O sistema busca os primeiros itens
- Mostra eles em cards organizados

**Quando clica no botão:**

- Faz uma chamada para a API
- Pega os dados que voltam
- Coloca um novo card no começo da lista

**Funcionalidade extra:**

- Clicando no ícone de lixeira, o card some
- A lista se reorganiza automaticamente
____________________________________________________________________________________________________________________________________________________________________________
# 🌱 Agroger Challenge - Technical Test

## 👋 About the Project
I developed this application as a technical test to demonstrate my React skills. It allows viewing and managing an item list dynamically.

## ✨ Key Features

- Displays an initial item list when the page loads  
- Adds new items when clicking the main button  
- Automatically updates the screen with new elements  
- Works well on both computers and mobile devices  

### 🎁 Bonus Features
- Implemented item deletion (not required)  
- Smooth animations during actions  

## 🛠️ Technologies Used
| Tool | Purpose |
|------------|------------|
| ![React](https://img.shields.io/badge/React-18-61DAFB) | Component-based UI |
| ![Vite](https://img.shields.io/badge/Vite-4-646CFF) | Fast build tool | 
| ![Axios](https://img.shields.io/badge/Axios-1.3-5A29E4) | HTTP requests | 
| CSS Modules | Component styling |

## 🚀 How to Run

# 1. Install dependencies
npm install

# 2. Start local server
npm start

# 3. Access in browser
http://localhost:5173
Project Structure
The code is logically organized for better understanding:

Copy
src/
├── components/    # Reusable parts (buttons, cards)
├── pages/         # Main screen
├── services/      # API communication
└── styles/        # Application styling

### How It Works
**When loading the page:**

- The system fetches initial items
- Displays them in organized cards

**When clicking the button:**

- Makes an API call
- Receives returned data
- Adds new card at the top of the list

**Extra functionality:**

- Clicking the trash icon removes the card
- The list automatically reorganizes
- This project was developed with clean code practices and attention to detail!
