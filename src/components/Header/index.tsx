import { useState, useEffect } from 'react'
import Link from 'next/link'

// style
import { Container, IconMenu, IconMenuClose, Arrow } from './styles'

// components
import Social from '../Social'

export default function Header () {
  const [openMenu, setOpenMenu] = useState(false)
  const [bgMenu, setBgMenu] = useState(false)

  useEffect(() => {
    window.onscroll = () => document.documentElement.scrollTop > 50 ? setBgMenu(true) : setBgMenu(false)
  }, [])

  return (
    <Container>
      <div className='backgroundColor'>
        <div className='colorWhite'></div>
        <div className='colorGelo'></div>
      </div>
      <div className='container'>
        <div className={bgMenu ? 'menu menuBg' : 'menu'}>
          <div className='logo'>
            <img src="/favicon.png" alt='Favicon' />
            <h1>muri<span>dev</span></h1>
          </div>

          <nav className={openMenu ? 'itens itensOpen' : 'itens'}>
            <ul>
              <li>
                <Link href='#'>
                  <a>Ínicio</a>
                </Link>
              </li>
              <li>
                <Link href='#about'>
                  <a>Sobre</a>
                </Link>
              </li>
              <li>
                <Link href='#cases'>
                  <a>Meus Cases</a>
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
            <IconMenuClose
              className='closeMenu'
              onClick={() => setOpenMenu(!openMenu)}
            />
            <Social />
          </nav>
          <Social />
          <IconMenu
            className='openMenu'
            onClick={() => setOpenMenu(!openMenu)}
          />
        </div>

        <div className='content'>
          <div className='contentLeft'>
            <h2>Olá, bem-vindo</h2>
            <h1>Sou, Murilio</h1>
            <h1>Um Desenvolvedor</h1>
            <h1>Fullstack</h1>
            <span>Hi, sou Murilio não Murilo, sou apaixonado por desenvolvimento
              tanto frontend como backend. Estou bastante focado na stack de
              JavaScript, pois acredito em todo o seu potencial e claramente sou um entusiasta da tecnologia.</span>
          </div>
          <div className='contentRight'>
            <img src="/user.png" alt='user' />
          </div>
        </div>
      </div>
      <a className='arrow' href='#about'>
        <Arrow />
      </a>
      <div id='content'></div>
    </Container>
  )
}
