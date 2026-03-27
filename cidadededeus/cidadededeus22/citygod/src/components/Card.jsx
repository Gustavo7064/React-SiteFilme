
function Card({ nome, descricao, imagem, ator }) {
  return (
    <div className="cartao">
      {/* Imagem do personagem */}
      <div className="envoltura-imagem-cartao">
        <img
          src={imagem}
          alt={`Personagem ${nome}`}
          className="imagem-cartao"
          onError={(e) => {
            // Fallback caso a imagem não carregue
            e.target.src = 'https://placehold.co/300x380/1a1a2e/e0b060?text=' + encodeURIComponent(nome)
          }}
        />
      </div>

      {/* Informações do personagem */}
      <div className="corpo-cartao">
        <h3 className="nome-cartao">{nome}</h3>
        {ator && <p className="ator-cartao">Interpretado por: <em>{ator}</em></p>}
        <p className="descricao-cartao">{descricao}</p>
      </div>
    </div>
  )
}

export default Card
