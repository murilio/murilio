import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

// style
import { Container, IconMenu, IconMenuClose, Arrow } from './styles'

// components
import Social from '../Social'

type HeaderProps = {
  title: string
  subtile: string
  description: string
  img: string
}

export default function Header ({ subtile, title, description, img }: HeaderProps) {
  const [openMenu, setOpenMenu] = useState(false)
  const [bgMenu, setBgMenu] = useState(false)

  useEffect(() => {
    window.onscroll = () => document.documentElement.scrollTop > 100 ? setBgMenu(true) : setBgMenu(false)
  }, [])

  return (
    <>
      <Head>
        <title>{title} | Murilio</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="Murilio"></meta>
      </Head>
      <Container>
        <div className='backgroundColor'>
          <div className='colorWhite'></div>
          <div className='colorGelo'></div>
        </div>
        <div className='container'>
          <div className={bgMenu ? 'menu scrollMenu' : 'menu'}>
            <Link href='/'>
              <a className='logo'>
                <img src="/favicon.png" alt='Favicon' />
                <h1>muri<span>dev</span></h1>
              </a>
            </Link>

            <nav className={openMenu ? 'itens itensOpen' : 'itens'}>
              <div className="contentMenu">
                <ul>
                  <li>
                    <Link href='/'>
                      <a>Ínicio</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/#about'>
                      <a>Sobre</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/#cases'>
                      <a>Meus Cases</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/#blog'>
                      <a>Blog</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/#contact'>
                      <a>Contato</a>
                    </Link>
                  </li>
                </ul>
                <IconMenuClose
                  className='closeMenu'
                  onClick={() => setOpenMenu(!openMenu)}
                />
                <Social />
              </div>
              <div className="divWithCloseMenu" onClick={() => setOpenMenu(!openMenu)}></div>
            </nav>
            <Social />
            <IconMenu
              className='openMenu'
              onClick={() => setOpenMenu(!openMenu)}
            />
          </div>

          <div className='content'>
            <div className='contentLeft'>
              <h2>{subtile}</h2>
              <h1>{title}</h1>
              <span>{description}</span>
            </div>
            <div className='contentRight'>
              <img src={img} alt={title} />
            </div>
          </div>
        </div>
        <a className='arrow' href='#content'>
          <Arrow />
        </a>
      </Container>
      <div id="content"></div>
    </>
  )
}
