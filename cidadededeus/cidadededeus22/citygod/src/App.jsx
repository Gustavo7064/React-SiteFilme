// App.jsx — Componente raiz da aplicação
// Controla a navegação entre páginas usando useState (sem react-router)

import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Personagens from './pages/Personagens'
import Curiosidades from './pages/Curiosidades'
import Footer from './components/Footer'

function App() {
  // Estado que controla qual página está sendo exibida
  const [pagina, setPagina] = useState('home')

  // Função que renderiza a página correta com base no estado
  const renderizarPagina = () => {
    switch (pagina) {
      case 'home':
        return <Home />
      case 'personagens':
        return <Personagens />
      case 'curiosidades':
        return <Curiosidades />
      default:
        return <Home />
    }
  }

  return (
    <div className="container-principal">
      {/* Navbar recebe o estado atual e a função para alterar a página */}
      <Navbar paginaAtual={pagina} setPagina={setPagina} />

      {/* Área principal — renderiza a página conforme o estado */}
      <main className="conteudo-principal">
        <div className="envoltura-pagina aparecer-suave" key={pagina}>
          {renderizarPagina()}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
