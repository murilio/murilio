import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

// style
import { Container, ArrowContent } from './styles'

// components
import Breadcrumbs from '../Breadcrumbs'
import Menu from '../Menu'
import useDetectClickOutside from '../../hooks/useDetectClickOutside'

type HeaderProps = {
  title: string
  subtitle: string
  description: string
  img: string
  breadcrumbs: boolean
}

export default function Header ({ subtitle, title, description, img, breadcrumbs }: HeaderProps) {
  const [bgMenu, setBgMenu] = useState(false)
  const { ref, componentVisible, setComponentVisible } = useDetectClickOutside(false)

  useEffect(() => {
    window.onscroll = () => document.documentElement.scrollTop > 100 ? setBgMenu(true) : setBgMenu(false)
  }, [])

  return (
    <>
      <Head>
        <title>{title} | Murilio</title>
        <meta name="description" content={description} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={`https://murilio.com.br${img}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`https://murilio.com.br${img}`} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:site_name" content="Murilio" />
        <meta property="og:type" content="article" />

        <meta name="keywords" content="HTML, CSS, JavaScript, NextJS, Golang" />
        <meta name="author" content="Murilio" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
                <img src="/favicon/favicon.ico" alt='Favicon' />
                <h1>muri<strong>dev</strong></h1>
              </a>
            </Link>

            <div ref={ref} className={componentVisible ? 'navigation navigationOpen' : 'navigation'}>
              <Menu />
            </div>
            <span className="material-icons-outlined btn-menu" onClick={() => setComponentVisible(true)}>menu</span>
          </div>

          <div className='content'>
            <div className='contentLeft'>
              {breadcrumbs && (<Breadcrumbs />)}
              <h2>{subtitle}</h2>
              <h1>{title}</h1>
              <span>{description}</span>
            </div>
            <div className='contentRight'>
              <img src={img} alt={title} />
            </div>
          </div>
        </div>
        <a className='arrow' href='#content'>
          <ArrowContent>
            <span className="material-icons-outlined">south</span>
          </ArrowContent>
        </a>
      </Container>
      <div id="content" />
    </>
  )
}
