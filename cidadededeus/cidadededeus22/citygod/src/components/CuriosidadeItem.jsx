// CuriosidadeItem.jsx — Componente para exibir uma curiosidade individual
// Recebe icone, titulo e texto como props

function CuriosidadeItem({ icone, titulo, texto }) {
  return (
    <div className="item-curiosidade">
      <div className="icone-curiosidade">{icone}</div>
      <div className="conteudo-curiosidade">
        <h3 className="titulo-curiosidade">{titulo}</h3>
        <p className="texto-curiosidade">{texto}</p>
      </div>
    </div>
  )
}

export default CuriosidadeItem
