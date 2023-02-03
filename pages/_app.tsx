import 'src/styles/main.css'
import type { AppProps } from 'next/app'
import Transition from 'src/components/Transition'
import { FacebookPixelWithNoSSR } from 'src/components/FacebookPixel'
import Header from 'src/components/Header'
import { Background1, Background2, Content } from 'src/styled-components/Background'
import store from 'src/store'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Background1>
      <Background2 src="/icons/stars2.svg" />
      <FacebookPixelWithNoSSR />
      <Provider store={store}>
        <Content>
          <Header />
          <Transition>
            <Component {...pageProps} />
          </Transition>
        </Content>
      </Provider>
    </Background1>
  )
}