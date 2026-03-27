

function Navbar({ paginaAtual, setPagina }) {
  // Lista de itens de navegação
  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'personagens', label: 'Personagens' },
    { id: 'curiosidades', label: 'Curiosidades' },
  ]

  return (
    <nav className="barra-navegacao">
      {/* Logo / Título do site */}
      <div className="marca-navegacao" onClick={() => setPagina('home')}>
        <span className="icone-marca"></span>
        <span className="titulo-marca">Cidade de Deus</span>
      </div>

      {/* Botões de navegação — alteram o estado "pagina" no App */}
      <ul className="lista-navegacao">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              className={`botao-navegacao ${paginaAtual === item.id ? 'botao-navegacao--ativo' : ''}`}
              onClick={() => setPagina(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
