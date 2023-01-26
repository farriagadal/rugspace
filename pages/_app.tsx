import 'src/styles/main.css'
import type { AppProps } from 'next/app'
import Transition from 'src/components/Transition'
import { FacebookPixelWithNoSSR } from 'src/components/FacebookPixel'
import Header from 'src/components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <FacebookPixelWithNoSSR />
      <Header />
      <Transition>
        <Component {...pageProps} />
      </Transition>
    </>

  )
}