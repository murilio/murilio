import { Container } from './styles'

export default function CardUser () {
  return (
    <Container>
      <div className='cards'></div>
      <div className='cards'>
        <img loading="lazy" src='https://avatars2.githubusercontent.com/u/36972345?v=4' alt='Imagem do usuário'/>
      </div>
      <div className='cards'></div>
      <div className='cards'></div>
    </Container>
  )
}
