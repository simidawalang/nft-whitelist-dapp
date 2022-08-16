import type { NextPage } from 'next'
import Head from 'next/head'
import { Carousel } from '../components'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ORISA</title>
        <meta name="description" content="NFT collection for fans of Yoruba mythology" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <div>
          <Carousel />
        </div>
      </main>
    </div>
  )
}

export default Home
