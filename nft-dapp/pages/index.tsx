import type { NextPage } from "next";
import { providers } from "ethers";
import Head from "next/head";
import { useEffect } from "react";
import { Button, Carousel } from "../components";

const Home: NextPage = () => {
  const getSignerOrPorvider = (needSigner: boolean = false) => {
    const provider = new providers.JsonRpcProvider();

    needSigner ? provider.getSigner() : provider;
  };

  const connectWallet = async () => {
    
  }

  useEffect(() => {
    const checkIfConnected = async () => {
      const { ethereum } = await window;

      console.log(ethereum);
    };
    checkIfConnected();
  }, []);

  return (
    <div>
      <Head>
        <title>ORISA</title>
        <meta
          name="description"
          content="NFT collection for fans of Yoruba mythology"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="homepage homepage-header container">
        <div className="intro">
          <h1 className="brand-text">ORISA</h1>
          <p>NFT collection for fans of Yoruba mythology</p>
          <Button content="Join Whitelist" />
        </div>
        <div>
          <Carousel />
        </div>
      </main>
    </div>
  );
};

export default Home;
