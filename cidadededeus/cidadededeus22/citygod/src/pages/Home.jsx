
function Home() {
  return (
    <section className="home-section">
      <div className="banner-destaque">
        <div className="camada-destaque">
          <span className="etiqueta-destaque">Filme Brasileiro · 2002</span>
          <h1 className="titulo-destaque">Cidade de Deus</h1>
          <p className="subtitulo-destaque">
            Uma história brutal e humana sobre crescer em meio ao crime
          </p>
        </div>
      </div>

      {/* Conteúdo principal: poster + sinopse */}
      <div className="conteudo-home">
        {/* Poster do filme */}
        <div className="envoltura-poster">
          <img
            src="/fotos/ks.jpg"
            alt="Poster do filme Cidade de Deus"
            className="imagem-poster"
            onError={(e) => {
              e.target.src = 'https://placehold.co/340x500/1a1a2e/e0b060?text=Cidade+de+Deus'
            }}
          />
          <div className="selo-poster">
            <span>⭐ 8.6</span>
            <span>IMDb</span>
          </div>
        </div>

        {/* Sinopse e informações */}
        <div className="info-home">
          <h2 className="titulo-secao">Sobre o Filme</h2>

          <p className="descricao-home">
            <strong>Cidade de Deus</strong> é um filme brasileiro de 2002 dirigido por
            <strong> Fernando Meirelles</strong> e <strong>Kátia Lund</strong>, baseado no
            romance homônimo de <strong>Paulo Lins</strong>, publicado em 1997. O livro, por sua vez,
            foi inspirado em fatos reais ocorridos no conjunto habitacional Cidade de Deus,
            localizado na zona oeste do Rio de Janeiro.
          </p>

          <p className="descricao-home">
            A narrativa acompanha <strong>Buscapé (Rocket)</strong>, um jovem sensível que sonha
            em se tornar fotógrafo e tenta escapar da violência que domina a favela. Ao longo de
            duas décadas — dos anos 1960 aos 1980 —, o filme retrata a ascensão do tráfico de
            drogas, as guerras entre gangues rivais e a luta pela sobrevivência de moradores
            comuns em meio ao caos.
          </p>

          <p className="descricao-home">
            Com uma linguagem cinematográfica inovadora, câmera na mão e montagem frenética,
            o filme se tornou um marco do cinema nacional e internacional, sendo indicado a
            quatro prêmios Oscar e conquistando reconhecimento em festivais ao redor do mundo.
          </p>

        
          <div className="ficha-tecnica">
            <h3 className="titulo-ficha">Ficha Técnica</h3>
            <table className="tabela-ficha">
              <tbody>
                <tr>
                  <td className="rotulo-ficha">Direção</td>
                  <td>Fernando Meirelles &amp; Kátia Lund</td>
                </tr>
                <tr>
                  <td className="rotulo-ficha">Roteiro</td>
                  <td>Bráulio Mantovani</td>
                </tr>
                <tr>
                  <td className="rotulo-ficha">Baseado em</td>
                  <td>Romance de Paulo Lins (1997)</td>
                </tr>
                <tr>
                  <td className="rotulo-ficha">Lançamento</td>
                  <td>30 de agosto de 2002</td>
                </tr>
                <tr>
                  <td className="rotulo-ficha">Duração</td>
                  <td>130 minutos</td>
                </tr>
                <tr>
                  <td className="rotulo-ficha">País</td>
                  <td>Brasil / França</td>
                </tr>
                <tr>
                  <td className="rotulo-ficha">Gênero</td>
                  <td>Crime · Drama · Thriller</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
