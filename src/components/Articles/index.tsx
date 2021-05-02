// styles
import { Container, Title } from './styles'

// components
import Card from '../Card/CardArticles'

const itens = [{
  id: 1,
  img: '/articles/input.png',
  title: 'Máscaras com regex no React JS'
}]

export default function Articles () {
  return (
    <Container id="blog">
      <Title>
        <h2>Conteúdo e artigos</h2>
        <span>Aqui tento escrever sobre meus processos, tecnologias e o que der na telha</span>
      </Title>
      <div className='container'>
        {itens.slice(0, 3).map(item => (
          <Card key={item.id} img={item.img} title={item.title} />
        ))}
      </div>
    </Container>
  )
}
