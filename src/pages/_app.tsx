import type { AppProps } from 'next/app'
import Router from 'next/router'
import Head from 'next/head'
import { useEffect, useState } from 'react'

// style global
import StyleGlobal from '@/src/styles/Global'
import Loading from '@/src/components/Loading'

export default function Application ({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const start = () => setLoading(true)
    const end = () => setLoading(false)

    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)
    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Murilio | Dev</title>
      </Head>
      <StyleGlobal />

      {loading && <Loading />}
      <Component {...pageProps} />
    </>
  )
}
