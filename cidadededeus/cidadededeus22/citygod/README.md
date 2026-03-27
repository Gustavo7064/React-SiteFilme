# 🎬 Cidade de Deus — SPA em React JS + Vite

Site de página única (SPA) sobre o filme **Cidade de Deus** (2002), desenvolvido com **React JS** e **Vite**, sem uso de react-router. A navegação entre páginas é controlada exclusivamente por `useState`.

---

## 🚀 Como rodar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- npm (incluído com o Node.js)

### Instalação e execução

```bash
# 1. Clone ou extraia o projeto
cd cidade-de-deus

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse no navegador: **http://localhost:5173**

### Build para produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

---

## 📁 Estrutura do Projeto

```
cidade-de-deus/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Card.jsx             # Card reutilizável para personagens
│   │   ├── CuriosidadeItem.jsx  # Item de curiosidade
│   │   ├── Footer.jsx           # Rodapé
│   │   └── Navbar.jsx           # Barra de navegação
│   ├── pages/
│   │   ├── Curiosidades.jsx     # Página de curiosidades
│   │   ├── Home.jsx             # Página inicial
│   │   └── Personagens.jsx      # Página de personagens
│   ├── App.jsx                  # Componente raiz + controle de navegação
│   ├── main.jsx                 # Ponto de entrada
│   └── style.css                # Estilos globais
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🧠 Tecnologias Utilizadas

| Tecnologia | Versão | Finalidade |
|---|---|---|
| React JS | 19.x | Biblioteca de UI |
| Vite | 8.x | Build tool e dev server |
| CSS Externo | — | Estilização global |
| useState | Hook nativo | Controle de navegação |

---

## 📄 Páginas

| Página | Descrição |
|---|---|
| **Início** | Nome do filme, sinopse, poster e ficha técnica |
| **Personagens** | 6 personagens em cards com nome, ator e descrição |
| **Curiosidades** | 9 fatos sobre produção, prêmios e impacto cultural |

---

## 🎨 Design

- Paleta escura com dourado/âmbar como cor de destaque
- Animação `fade-in` na troca de páginas
- Efeito hover nos cards de personagens
- Layout responsivo (desktop, tablet e mobile)
- Navbar fixa no topo com indicação da página ativa

---

## 📌 Observação sobre Navegação (SPA)

A navegação **não utiliza react-router**. O controle é feito via `useState` no `App.jsx`:

```jsx
const [pagina, setPagina] = useState('home')
```

Cada botão da Navbar chama `setPagina('nome-da-pagina')`, e o componente `renderizarPagina()` decide qual página renderizar com base no estado atual.
