import type { NextPage } from "next";
import { providers } from "ethers";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Button, Carousel } from "../components";

const Home: NextPage = () => {
  const [defaultAccount, setDefaultAccount] = useState("");

  const getSignerOrProvider = (needSigner: boolean = false) => {
    const provider = new providers.JsonRpcProvider();

    needSigner ? provider.getSigner() : provider;
  };

  const checkIfConnected = async () => {
    try {
      const provider = new providers.Web3Provider(window.ethereum);

      const accounts = await provider.send("eth_requestAccounts", []);

      setDefaultAccount(accounts[0]);
    } catch (e: any) {
      console.error(e.message);
    }
  };

  const connectWallet = async () => {
    try {
      const provider = new providers.Web3Provider(window.ethereum);

      const accounts = await provider.send("eth_requestAccounts", []);

      setDefaultAccount(accounts[0]);
    } catch (e: any) {
      console.error(e.message);
    }
  };


  useEffect(() => {
    checkIfConnected();
  }, []);

  useEffect(() => {
    window?.ethereum.on("accountsChanged", connectWallet);

    return () => {
      window?.ethereum?.removeListener("accountsChanged", connectWallet);
    }
  }, [defaultAccount])

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
      <p> {defaultAccount}</p>
      <main className="homepage homepage-header container">
        <div className="intro">
          <h1 className="brand-text">ORISA</h1>
          <p>NFT collection for fans of Yoruba mythology</p>
          <Button content="Join Whitelist" onClick={connectWallet} />
        </div>
        <div>
          <Carousel />
        </div>
      </main>
    </div>
  );
};

export default Home;
