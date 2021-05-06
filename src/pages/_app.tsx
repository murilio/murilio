import Head from 'next/head'
import type { AppProps } from 'next/app'

// style global
import StyleGlobal from '../styles/Global'

export default function Application ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Murilio | Dev</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <StyleGlobal />
      <Component {...pageProps} />
    </>
  )
}
