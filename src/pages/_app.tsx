import type { AppProps } from 'next/app'
import Head from 'next/head'

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import * as gtag from '../lib/gtag'

// style global
import StyleGlobal from '@/src/styles/Global'
import Loading from '@/src/components/Loading'

export default function Application ({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const start = () => setLoading(true)
    const end = () => setLoading(false)

    const handleRouteChange = (url: string = 'www.murilio.com.br') => {
      gtag.pageView(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('routeChangeStart', start)
    router.events.on('routeChangeComplete', end)
    router.events.on('routeChangeError', end)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('routeChangeStart', start)
      router.events.off('routeChangeComplete', end)
      router.events.off('routeChangeError', end)
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
