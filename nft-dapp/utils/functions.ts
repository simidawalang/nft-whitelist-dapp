import { providers } from "ethers";

export const getSignerOrProvider = async (needSigner: boolean) => {
  const provider = new providers.Web3Provider(window.ethereum);

  if(needSigner) {
    return provider.getSigner();
  } else {
    return provider;
  }
};
