import Head from 'next/head'
import ActionsBar from 'src/components/ActionsBar'
import Footer from 'src/components/Footer'
import Heading from 'src/components/Heading'
import Sizes from 'src/pages/measures/components/Sizes'
import { useSelector } from 'react-redux'

export default function Measures () {
  const imageStore = useSelector((state: any) => state.image)

  return (
    <>
      <Head>
        <title>RugSpace.cL</title>
        <meta name="description" content="Alfombras personalizadas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading title="2. Selecciona un tamaño" />
      <Sizes />
      <ActionsBar
        previousUrl="/crear"
        nextUrl="/editar"
        canContinue={imageStore.sizeId}
      />
      <Footer padding="60px 0 150px 0"/>
    </>
  )
}
