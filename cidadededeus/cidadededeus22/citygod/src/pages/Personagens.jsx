
import Card from '../components/Card'

// Dados dos personagens principais do filme
const personagens = [
  {
    id: 1,
    nome: 'Buscapé (Rocket)',
    ator: 'Alexandre Rodrigues',
    imagem: 'https://s2-oglobo.glbimg.com/2lBbPOB8PS3Cyj9v53Be-M2v7W4=/0x0:698x390/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/A/U/1NjYFBQKOgqxRuH3DM5Q/39509070-2108.2002-divulgacao-cl-cidade-de-deus-e-mail.jpg',
    descricao:
      'O protagonista e narrador da história. Buscapé é um jovem sensível e tímido que cresceu na Cidade de Deus, mas sempre sonhou em escapar da violência através da fotografia. Seu olhar humanizado sobre a favela é o fio condutor de toda a narrativa.',
  },
  {
    id: 2,
    nome: 'Zé Pequeno (Li\'l Zé)',
    ator: 'Leandro Firmino',
    imagem: 'https://tm.ibxk.com.br/2024/09/12/12163642354485.png?ims=1200x1200',
    descricao:
      'O grande vilão do filme. Desde criança demonstrava crueldade e ambição. Tornou-se o traficante mais temido da Cidade de Deus, dominando o tráfico de drogas com violência extrema e eliminando rivais sem piedade.',
  },
  {
    id: 3,
    nome: 'Bené (Benny)',
    ator: 'Phellipe Haagensen',
    imagem: 'https://cdn.culturagenial.com/imagens/benecidadededeus-cke.jpg?class=article',
    descricao:
      'Melhor amigo de Zé Pequeno e o traficante mais querido da favela. Bené equilibrava o lado violento do crime com um espírito descontraído e generoso. Sonhava em deixar o tráfico e começar uma nova vida, representando a esperança perdida.',
  },
  {
    id: 4,
    nome: 'Mané Galinha (Knockout Ned)',
    ator: 'Seu Jorge',
    imagem: 'https://cdn.culturagenial.com/imagens/maneg.jpg?class=article',
    descricao:
      'Trabalhador honesto que se viu forçado a entrar no crime após sua família ser atacada por Zé Pequeno. Tornou-se o principal rival do traficante, liderando uma facção rival. Seu personagem representa a tragédia de quem é arrastado pela violência sem escolha.',
  },
  {
    id: 5,
    nome: 'Cenoura',
    ator: 'Matheus Nachtergaele',
    imagem: 'https://vejario.abril.com.br/wp-content/uploads/2017/06/reproduc3a7c3a3o2.jpg?crop=1&resize=1212,909',
    descricao:
      'Traficante rival de Zé Pequeno que domina parte da Cidade de Deus. Cenoura é pragmático e calculista, preferindo a negociação à guerra aberta — até ser obrigado a reagir. Representa a outra face do poder paralelo na favela.',
  },
  {
    id: 6,
    nome: 'Dadinho (Lil\' Dice)',
    ator: 'Douglas Silva',
    imagem: 'https://blog.hiperion.art.br/wp-content/uploads/2024/05/cidadededeus_bloghiperion-1024x658.jpg',
    descricao:
      'A versão jovem de Zé Pequeno. Ainda criança, Dadinho já demonstrava uma violência fria e calculada. Sua transformação ao longo dos anos mostra como o ambiente moldou um dos criminosos mais temidos da história do cinema brasileiro.',
  },
]

function Personagens() {
  return (
    <section className="secao-personagens">
      <div className="cabecalho-secao">
        <h2 className="titulo-secao">Personagens</h2>
        <p className="subtitulo-secao">
          Conheça os personagens que deram vida à história da Cidade de Deus
        </p>
      </div>

    
      <div className="grade-cartoes">
        {personagens.map((p) => (
          <Card
            key={p.id}
            nome={p.nome}
            ator={p.ator}
            imagem={p.imagem}
            descricao={p.descricao}
          />
        ))}
      </div>
    </section>
  )
}

export default Personagens
