import type   { AppProps } from 'next/app'

// style global
import StyleGlobal from '../styles/Global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <StyleGlobal />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
