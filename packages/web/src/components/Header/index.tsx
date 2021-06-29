import { memo, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Head from 'next/head'

// style
import { Container, ArrowContent, ScrollButton } from './styles'

// components
import Menu from '../Menu'

type HeaderProps = {
  img: string
  title: string
  subtitle: string
  description: string
  breadcrumbs: boolean
}

function HeaderComponent ({ subtitle, title, description, img, breadcrumbs }: HeaderProps) {
  const [scrollHeight, setScrollHeight] = useState(0)
  const { asPath } = useRouter()

  const scrollToTop = () => window.scrollTo({ top: 0 })

  useEffect(() => {
    window.onscroll = () => document.documentElement.scrollTop > 0 ? setScrollHeight(document.documentElement.scrollTop) : setScrollHeight(0)
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
        <meta property="og:image:type" content="image/jpg"></meta>
        <meta property="og:image:secure_url" content={`https://murilio.com.br${img}`} />
        <meta property="og:image:alt" content={description} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:site" content="@muriliodev" />
        <meta name="twitter:creator" content="@muriliodev" />
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

        <Menu
          img={img}
          title={title}
          scrollHeight={scrollHeight}
          subtitle={subtitle}
          breadcrumbs={breadcrumbs}
          description={description}
        />

        <a className='arrow' href='#content'>
          <ArrowContent>
            <span className="material-icons-outlined">south</span>
          </ArrowContent>
        </a>
      </Container>
      <div id="content" />
      <ScrollButton show={scrollHeight > 500} onClick={scrollToTop} >
        <span className="material-icons-outlined">
          expand_less
        </span>
      </ScrollButton >
    </>
  )
}

export const Header = memo(HeaderComponent)
