import Head from 'next/head'
import ComingSoon from 'src/components/ComingSoon'
import Footer from 'src/components/Footer'
import Content from 'src/pages/home/components/Content'
import Create from 'src/pages/home/components/Create'
import Heading from 'src/pages/home/components/Heading'
import HowWorks from 'src/pages/home/components/HowWorks'
import OurValues from 'src/pages/home/components/OurValues'

export default function Home() {
  return (
    <>
      <Head>
        <title>RugSpace.cL</title>
        <meta name="description" content="Alfombras personalizadas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading />
      <HowWorks />
      <OurValues />
      <Content />
      <Create />
      <Footer />
    </>
  )
}
