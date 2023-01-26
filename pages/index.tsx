import Head from 'next/head'
import ComingSoon from 'src/components/ComingSoon'
import Content from 'src/pages/home/components/Content'
import Heading from 'src/pages/home/components/Heading'

export default function Home() {
  return (
    <>
      <Head>
        <title>RugSpace.cL</title>
        <meta name="description" content="Alfombras personalizadas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading />
      <Content />
      {/* <ComingSoon /> */}
    </>
  )
}
