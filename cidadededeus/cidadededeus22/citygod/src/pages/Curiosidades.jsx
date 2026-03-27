


import CuriosidadeItem from '../components/CuriosidadeItem'

// Dados das curiosidades sobre o filme
const curiosidades = [
  {
    id: 1,
    icone: '  ',
    titulo: 'Lançamento',
    texto:
      'O filme foi lançado em 30 de agosto de 2002 no Brasil, após estrear no Festival de Cannes em maio do mesmo ano. Nos Estados Unidos, foi lançado em janeiro de 2003 pela Miramax Films.',
  },
  {
    id: 2,
    icone: '',
    titulo: 'Direção Inovadora',
    texto:
      'Fernando Meirelles e Kátia Lund utilizaram técnicas cinematográficas revolucionárias para a época, como câmera na mão, montagem acelerada e uma paleta de cores que muda conforme a época narrada — tons quentes nos anos 60 e frios nos anos 80.',
  },
  {
    id: 3,
    icone: '',
    titulo: 'Indicações ao Oscar 2004',
    texto:
      'O filme recebeu quatro indicações ao Oscar: Melhor Diretor (Fernando Meirelles), Melhor Roteiro Adaptado (Bráulio Mantovani), Melhor Montagem e Melhor Fotografia (César Charlone). Foi um marco histórico para o cinema brasileiro.',
  },
  {
    id: 4,
    icone: '',
    titulo: 'Baseado em Fatos Reais',
    texto:
      'O roteiro é adaptado do romance de Paulo Lins, que viveu na Cidade de Deus e baseou o livro em pesquisas reais sobre a comunidade. Muitos dos personagens são inspirados em pessoas que existiram de verdade na favela carioca.',
  },
  {
    id: 5,
    icone: '',
    titulo: 'Elenco Não Profissional',
    texto:
      'Grande parte do elenco era formada por moradores de favelas cariocas sem experiência prévia em atuação. Fernando Meirelles realizou oficinas de teatro e cinema com os jovens antes e durante as filmagens, em um processo chamado de "Nós do Cinema".',
  },
  {
    id: 6,
    icone: '',
    titulo: 'Reconhecimento Internacional',
    texto:
      'Além do Oscar, o filme ganhou o BAFTA de Melhor Filme em Língua Estrangeira, o César de Melhor Filme Estrangeiro e foi eleito pela revista Time como um dos 100 melhores filmes de todos os tempos. O IMDb o classifica com nota 8.6.',
  },
  {
    id: 7,
    icone: '',
    titulo: 'A Fotografia como Salvação',
    texto:
      'A câmera fotográfica usada por Buscapé no filme é uma metáfora poderosa: enquanto outros personagens empunham armas, ele empunha uma câmera. A fotografia representa sua saída da violência — e de fato, ao final, uma de suas fotos é publicada em um jornal.',
  },
  {
    id: 8,
    icone: '',
    titulo: 'Orçamento e Bilheteria',
    texto:
      'Produzido com um orçamento de aproximadamente R$ 6 milhões (cerca de US$ 3,3 milhões na época), o filme arrecadou mais de US$ 30 milhões nas bilheterias mundiais, tornando-se um dos filmes brasileiros de maior sucesso comercial internacional.',
  },
  {
    id: 9,
    icone: '',
    titulo: 'Trilha Sonora Marcante',
    texto:
      'A trilha sonora combina funk carioca, samba e música eletrônica, composta por Ed Côrtes e Antônio Pinto. A música "Alvorada" e outras composições criaram uma atmosfera única que reforça a identidade cultural da favela retratada no filme.',
  },
]

function Curiosidades() {
  return (
    <section className="secao-curiosidades">

      <div className="cabecalho-secao">
        <h2 className="titulo-secao">Curiosidades</h2>
        <p className="subtitulo-secao">
          Fatos fascinantes sobre a produção e o impacto de Cidade de Deus
        </p>
      </div>

      {/* Lista de curiosidades */}
      <div className="lista-curiosidades">
        {curiosidades.map((c) => (
          <CuriosidadeItem
            key={c.id}
            icone={c.icone}
            titulo={c.titulo}
            texto={c.texto}
          />
        ))}
      </div>
    </section>
  )
}

export default Curiosidades
