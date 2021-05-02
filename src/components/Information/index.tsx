// styles
import { Container, IconNode, IconReact, IconJS } from './styles'

// components
import CardUser from '../CardUser'

export default function Information () {
  return (
    <>
      <div id="about"></div>
      <Container>
        <CardUser />
        <div className='details'>
          <h2>Desenvolvedor Fullstack</h2>
          <h1>Murilio Nascimento</h1>
          <p>
            Hi, sou Murilio não Murilo, sou apaixonado por desenvolvimento tanto
            frontend como backend. Estou bastante focado na stack de JavaScript,
            pois acredito em todo o seu potencial e claramente sou um entusiasta
            da tecnologia.
          </p>
          <p>
            Faço uso dessas tecnologias para o melhor desenvolvimento sites com
            ótima aparência e altíssima performance.
          </p>
          <a
            href='https://github.com/murilio'
            target='_blank'
            rel='noreferrer'>
            <span>Confira meu CV</span>
          </a>
        </div>
        <div className='technologies'>
          <img src="/circles.svg" alt='círculos' />
          <div className='cardsTechnologies'>
            <p>tecnologias do meu {'<'}3 </p>
            <div className='cardTechs'>
              <img src="/heart.svg" alt='Coração pixelizado' className='heart' />
              <IconNode />
              <IconReact />
              <IconJS />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
