import Head from 'next/head'
import type { AppProps } from 'next/app'

// style global
import StyleGlobal from '../styles/Global'

export default function Application ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Murilio | Dev</title>
      </Head>
      <StyleGlobal />
      <Component {...pageProps} />
    </>
  )
}
