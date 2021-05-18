import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

// style
import { Container, IconMenu, IconMenuClose, Arrow } from './styles'

// components
import Social from '../Social'
import Breadcrumbs from '../Breadcrumbs'
import { ActiveClassLink } from '../Link'

type HeaderProps = {
  title: string
  subtile: string
  description: string
  img: string
  breadcrumbs: boolean
}

export default function Header ({ subtile, title, description, img, breadcrumbs }: HeaderProps) {
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
        <div className='backgroundColor' id="inicio">
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
                    <ActiveClassLink href='/#inicio' linkName="Início" />
                  </li>
                  <li>
                    <ActiveClassLink href='/#about' linkName="Sobre" />
                  </li>
                  <li>
                    <ActiveClassLink href='/#cases' linkName=" Meus Cases"/>
                  </li>
                  <li>
                    <ActiveClassLink href='/#blog' linkName="Blog" />
                  </li>
                  <li>
                    <ActiveClassLink href='/#contact' linkName="Contato" />
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
              {breadcrumbs && (
                <Breadcrumbs />
              )}
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
