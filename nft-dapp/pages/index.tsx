import type { NextPage } from 'next'
import Head from 'next/head'
import { Button, Carousel } from '../components'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ORISA</title>
        <meta name="description" content="NFT collection for fans of Yoruba mythology" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <main className="homepage homepage-header container">
        <div className="intro">
          <h1 className="brand-text">ORISA</h1>
          <p>NFT collection for fans of Yoruba mythology</p>
          <Button content="Join Whitelist"/>
        </div>
        <div>
          <Carousel />
        </div>
      </main>
    </div>
  )
}

export default Home
