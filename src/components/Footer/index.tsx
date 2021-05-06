import Link from 'next/link'

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
              <li>
                <Link href='#'>
                  <a>Início</a>
                </Link>
              </li>
              <li>
                <Link href='#about'>
                  <a>Sobre</a>
                </Link>
              </li>
              <li>
                <Link href='#cases'>
                  <a>Cases</a>
                </Link>
              </li>
              <li>
                <Link href='#blog'>
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href='#contact'>
                  <a>Contato</a>
                </Link>
              </li>
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
