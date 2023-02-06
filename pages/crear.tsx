import Head from 'next/head'
import ActionsBar from 'src/components/ActionsBar'
import Footer from 'src/components/Footer'
import Heading from 'src/components/Heading'
import Tabs from 'src/pages/create/components/Tabs'
import { useSelector } from 'react-redux'

export default function Home() {
  const imageStore = useSelector((state: any) => state.image)

  return (
    <>
      <Head>
        <title>RugSpace.cL</title>
        <meta name="description" content="Alfombras personalizadas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading title="1. Escoge una imagen" />
      <Tabs />
      <ActionsBar
        nextUrl="/medidas"
        canContinue={imageStore?.url}
      />
      <Footer padding="60px 0 150px 0"/>
    </>
  )
}
