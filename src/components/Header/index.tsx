import Head from 'next/head'
import Link from 'next/link'

import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

// style
import { Container, ArrowContent } from './styles'

// components
import Breadcrumbs from '../Breadcrumbs'
import Menu from '../Menu'
import useDetectClickOutside from '@/src/hooks/useDetectClickOutside'

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
  const { asPath } = useRouter()

  useEffect(() => {
    window.onscroll = () => document.documentElement.scrollTop > 100 ? setBgMenu(true) : setBgMenu(false)
  }, [])

  return (
    <>
      <Head>
        <title>{title} | Murilio</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="hostname" content="murilio.com.br" />
        <meta name="author" content="Murilio" />
        <meta name="description" content={description} />
        <meta name="google" content="notranslate" />
        <meta name="keywords" content="HTML, CSS, JavaScript, NextJS, Golang" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="image" content={`https://murilio.com.br${img}`} />

        <meta property="og:url" content={`https://murilio.com.br${asPath}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Murilio Dev" />
        <meta property="og:image" content={`https://murilio.com.br${img}`} />
        <meta property="og:image:secure_url" content={`https://murilio.com.br${img}`} />
        <meta property="og:image:alt" content={description} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:site" content="@Murilio20" />
        <meta name="twitter:creator" content="@Murilio20" />
        <meta name="twitter:image" content={`https://murilio.com.br${img}`} />
        <meta name="twitter:image:src" content={`https://murilio.com.br${img}`} />
        <meta name="twitter:image:alt" content={title} />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:description" content={description} />

        <meta name="google-site-verification" content="YAhG_xrpoAMTkeB0RrLYUr85OVC6zvTQB6RFkgqbaSc" />
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
                <img loading="lazy" src="/favicon.svg" alt='Favicon' />
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
              <img loading="lazy" src={img} alt={title} />
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
