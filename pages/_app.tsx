import 'src/styles/main.css'
import type { AppProps } from 'next/app'
import Transition from 'src/components/Transition'
import { FacebookPixelWithNoSSR } from 'src/components/FacebookPixel'
import Header from 'src/components/Header'
import { Background1, Background2, Content } from 'src/styled-components/Background'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Background1>
      <Background2 src="/icons/stars2.svg" />
      <FacebookPixelWithNoSSR />
      <Content>
        <Header />
        <Transition>
          <Component {...pageProps} />
        </Transition>
      </Content>
      {/* <img className='stars' src='/icons/stars.svg' alt="Stars SVG" width={145} height={146} /> */}
    </Background1>
  )
}