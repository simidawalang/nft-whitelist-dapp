import { providers } from "ethers";

type ExtensionForProvider = {
  on: (event: string, callback: (...params?: any) => void) => void;
  removeListener:  (event: string, callback: (...params?: any) => void) => void;
};

type EthersProvider = providers.ExternalProvider & ExtensionForProvider;

declare global {
  interface Window {
    ethereum: EthersProvider;
  }
}

export {};
