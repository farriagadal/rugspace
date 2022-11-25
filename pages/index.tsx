import Head from 'next/head'
import ComingSoon from 'src/components/ComingSoon'

export default function Home() {
  return (
    <>
      <Head>
        <title>RugSpace.cL</title>
        <meta name="description" content="Alfombras personalizadas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Heading /> */}
      <ComingSoon />
    </>
  )
}
