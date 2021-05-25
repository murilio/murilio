import { ActiveClassLink } from '../Link'

// styles
import { Container } from './styles'

export default function Footer () {
  return (
    <Container id="contact">
      <div className='footer'>
        <div className='footerLeft'>
          <h1>
            Vamos conversar<span>.</span>
          </h1>
          <span className='linha'></span>
          <p>contato@murilio.com.br</p>
          <p>(83) 9 9665-9384</p>

          <div className='location'>
            <p>João Pessoa - Paraíba </p>
            <p>Fullstack Developer at Sogo Tecnologia</p>
          </div>
        </div>
        <div className='footerRight'>
          <div className='logo'>
            <img src="/faviconWhite.png" alt='logo white' />
            <h1>
              muri<span>dev</span>
            </h1>
          </div>
          <div className='subMenu'>
            <ul>
              <li><ActiveClassLink href='/#inicio' linkName="Início" /></li>
              <li><ActiveClassLink href='/#about' linkName="Sobre" /></li>
              {/* <li><ActiveClassLink href='/#cases' linkName="Cases" /></li> */}
              <li><ActiveClassLink href='/#blog' linkName="Blog" /></li>
              <li><ActiveClassLink href='/#contact' linkName="Contato" /></li>
            </ul>
            <ul>
              <li>
                <a
                  href='https://linkedin.com/in/murilio'
                  target='_blank'
                  rel='noreferrer'>Linkedin</a>
              </li>
              <li>
                <a
                  href='https://github.com/murilio'
                  target='_blank'
                  rel='noreferrer'>Github</a>
              </li>
              <li>
                <a
                  href='https://instagram.com/murilio.sw/'
                  target='_blank'
                  rel='noreferrer'>Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='subFooter'>
        <h2>Layout desenhado com </h2>
        <img src="/heart.svg" alt='coração pixelizado' />
        <h2>por</h2>
        <a
          href='https://www.linkedin.com/in/edumauro/'
          target='_blank'
          rel='noreferrer'>
          Eduardo Mauro
        </a>
      </div>
    </Container>
  )
}
