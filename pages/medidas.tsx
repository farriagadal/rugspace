import Head from 'next/head'
import Footer from 'src/components/Footer'
import Heading from 'src/pages/create/components/Heading'
import Tabs from 'src/pages/create/components/Tabs'

export default function Home() {
  return (
    <>
      <Head>
        <title>RugSpace.cL</title>
        <meta name="description" content="Alfombras personalizadas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading title="2. Selecciona un tamaño" />
      <Tabs />
      <Footer padding="60px 0 150px 0"/>
    </>
  )
}
