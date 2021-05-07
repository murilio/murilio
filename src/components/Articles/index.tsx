// styles
import { ReactNode } from 'react'
import { Container, Title } from './styles'

interface ArticlesProps {
  children?: ReactNode
}

export default function Articles ({ children }: ArticlesProps) {
  return (
    <Container id="blog">
      <Title>
        <h2>Conteúdo e artigos</h2>
        <span>Aqui tento escrever sobre meus processos, tecnologias e o que der na telha</span>
      </Title>
      <div className='container'>
        {children}
      </div>
    </Container>
  )
}
