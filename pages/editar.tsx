import Head from 'next/head'
import ActionsBar from 'src/components/ActionsBar'
import Footer from 'src/components/Footer'
import Heading from 'src/components/Heading'
import ImageEditor from 'src/pages/edit/components/ImageEditor'

export default function Edit() {
  return (
    <>
      <Head>
        <title>RugSpace.cL</title>
        <meta name="description" content="Alfombras personalizadas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading title="3. Ajusta tu imagen" />
      <ImageEditor />
      <ActionsBar />
      <Footer padding="60px 0 150px 0"/>
    </>
  )
}
