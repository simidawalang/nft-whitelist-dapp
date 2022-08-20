import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Contract, providers } from "ethers";
import { getSignerOrProvider } from "../utils/functions";
import { Button, Carousel } from "../components";
import { ABI, WHITELIST_CONTRACT_ADDRESS } from "../constants";

const Home: NextPage = () => {
  const [defaultAccount, setDefaultAccount] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [numWhitelisted, setNumWhitelisted] = useState(0);
  const [isWhitelisted, setIsWhitelisted] = useState(false);

  const getNumberOfWhitelistedAddresses = async () => {
    try {
      if (window.ethereum) {
        const provider = await getSignerOrProvider(false);
        const whitelistContract = new Contract(
          WHITELIST_CONTRACT_ADDRESS,
          ABI,
          provider
        );

        setNumWhitelisted(await whitelistContract.numAddressesWhitelisted());
      }
    } catch (e: any) {
      console.error(e.message);
    }
  };

  const checkIfWhitelisted = async () => {
    try {
      if(window.ethereum) {
        const provider = new providers.Web3Provider(window?.ethereum);

        const accounts = await provider.send("eth_requestAccounts", []);
  
        const whitelistContract = new Contract(
          WHITELIST_CONTRACT_ADDRESS,
          ABI,
          provider
        );
  
        setIsWhitelisted(
          await whitelistContract.whitelistedAddress(accounts[0])
        );
      }
  
    } catch(e: any) {
      console.error(e.message);
    }
  };

  const checkIfConnected = async () => {
    try {
      if (window.ethereum) {
      
      const provider = new providers.Web3Provider(window?.ethereum);

      const accounts = await provider.listAccounts();

      if (accounts.length > 0) {
        setDefaultAccount(accounts[0]);
        setIsConnected(true);
        await getNumberOfWhitelistedAddresses();

        
      }} else {
        setIsConnected(false);
        setDefaultAccount("");
      }
    } catch (e: any) {
      console.error(e.message);
    }
  };

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const provider = new providers.Web3Provider(window.ethereum);

        const accounts = await provider.send("eth_requestAccounts", []);

        setDefaultAccount(accounts[0]);

        setIsConnected(true);

        await checkIfWhitelisted();
      } else {
        alert("Please install MetaMask to continue.");
      }
    } catch (e: any) {
      console.error(e.message);
    }
  };

  const handleAccountsChange = async () => {
    const provider = new providers.Web3Provider(window?.ethereum);

    const accounts = await provider.send("eth_requestAccounts", []);

    if (accounts.length > 0) {
      setDefaultAccount(accounts[0]);
      checkIfWhitelisted();
    } else {
      setDefaultAccount("");
      setIsConnected(false);
    }
  };

  const addAddressToWhitelist = async () => {
    try {
      const signer = await getSignerOrProvider(true);
      const whitelistContract = new Contract(
        WHITELIST_CONTRACT_ADDRESS,
        ABI,
        signer
      );

      const tx = await whitelistContract.addAddressToWhitelist();
      await tx.wait();
      setIsWhitelisted(true);
      await getNumberOfWhitelistedAddresses();
    } catch (e: any) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    checkIfConnected();
    checkIfWhitelisted();
    getNumberOfWhitelistedAddresses();

  }, []);

  useEffect(() => {
    window?.ethereum?.on("accountsChanged", handleAccountsChange);

    return () => {
      window?.ethereum?.removeListener("accountsChanged", handleAccountsChange);
    };
  }, [defaultAccount]);

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
          {!isConnected ? (
            <Button content="Connect Wallet" onClick={connectWallet} />
          ) : (
            !isWhitelisted && (
              <Button
                content="Join Whitelist"
                onClick={addAddressToWhitelist}
              />
            )
          )}
          {numWhitelisted !== 0 && (
            <p>
              {numWhitelisted} have been whitelisted
              {isWhitelisted && <span>, including you!</span>}
            </p>
          )}
        </div>
        <div>
          <Carousel />
        </div>
      </main>
    </div>
  );
};

export default Home;
