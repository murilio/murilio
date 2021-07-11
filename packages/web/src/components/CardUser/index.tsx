import { Container } from './styles'

export default function CardUser () {
  return (
    <Container>
      <div className='cards'></div>
      <div className='cards'>
        <img loading="lazy" src='https://github.com/murilio.png' alt='Imagem do usuário'/>
      </div>
      <div className='cards'></div>
      <div className='cards'></div>
    </Container>
  )
}
