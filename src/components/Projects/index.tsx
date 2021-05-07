// styles
import { Container, Title } from './styles'

// components
import Card from '../Card/CardProjects'

const itens = [{
  id: 1,
  img: '/projects/isca.png',
  url: 'https://iscaweb.herokuapp.com/',
  title: 'e-SIC',
  description: 'O e-SIC (Sistema Eletrônico do Serviço de Informações ao Cidadão) permite que qualquer pessoa, física ou jurídica, encaminhe pedidos de acesso a informação.'
}]

export default function Projects () {
  return (
    <>
      <div id="cases"></div>
      <Container>
        <Title>
          Alguns dos meus <span>principais projetos</span>
        </Title>
        <span></span>
        <div className='container'>
          {itens.slice(0, 4).map((item, index) => (
            <Card
              key={item.id}
              url={item.url}
              img={item.img}
              title={item.title}
              description={item.description}
              lastPost={index === 0}
            />
          ))}
        </div>
      </Container>
    </>
  )
}
