import * as nearAPI from "near-api-js";
import getConfig from "./config";

let contract: any;
let wallet: any;
let nearConfig: any;

export async function getNearInfo() {
  nearConfig = getConfig("testnet");

  const keyStore = new nearAPI.keyStores.BrowserLocalStorageKeyStore();

  const near = await nearAPI.connect({ keyStore, ...nearConfig, headers: {} });

  wallet = new nearAPI.WalletConnection(near, nearConfig.contractName);

  let currentUser;
  if (wallet.getAccountId()) {
    currentUser = {
      accountId: wallet.getAccountId(),
      balance: (await wallet.account().state()).amount,
    };
  }

  contract = new nearAPI.Contract(wallet.account(), nearConfig.contractName, {
    viewMethods: [], // TODO: add smart contract methods
    changeMethods: [], // TODO: add smart contract methods
  });

  return { contract, currentUser, nearConfig, wallet };
}

// -----------------------------------------------------------------------------------
// view functions
// -----------------------------------------------------------------------------------

// TODO

// -----------------------------------------------------------------------------------
// change functions
// -----------------------------------------------------------------------------------

export const signIn = () => {
  wallet.requestSignIn(
    {
      // contract and methods requesting access to
      contractId: nearConfig.contractName,
      methodNames: [],
    },
    // optional name
    "NearSea" 
  );
};

export const signOut = () => {
  wallet.signOut();
  window.location.replace(window.location.origin + window.location.pathname);
};
