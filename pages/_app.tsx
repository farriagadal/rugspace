import 'src/styles/main.css'
import type { AppProps } from 'next/app'
import Transition from 'src/components/Transition'
import { FacebookPixelWithNoSSR } from 'src/components/FacebookPixel'
import Header from 'src/components/Header'
import { Background1, Background2, Content } from 'src/styled-components/Background'

import store from 'src/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

const persistor = persistStore(store)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Background1>
      <Background2 src="/icons/stars2.svg" />
      <FacebookPixelWithNoSSR />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Content>
            <Header />
            <Transition>
              <Component {...pageProps} />
            </Transition>
          </Content>
        </PersistGate>
      </Provider>
    </Background1>
  )
}