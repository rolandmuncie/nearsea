import * as nearAPI from "near-api-js";
import getConfig from "./config";

let contract: any;
let wallet: any;
let nearConfig: any;

export const {
	utils: {
		format: {
			formatNearAmount, parseNearAmount
		}
	}
} = nearAPI;

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

export async function retrieveOwnedItems(wallet:any)  {

  const nearConfig = getConfig("testnet");
  /// user tokens
  let tokens = []
  let account = wallet.account();
  if (account) {
      tokens = await account.viewFunction(nearConfig.contractId, 'nft_tokens_for_owner', {
          account_id: account.accountId,
          from_index: '0',
          limit: 50
      });
  }

  return tokens;
};

export async function handleMint(wallet:any, name:string, description:string, link: string) {
  const nearConfig = getConfig("testnet");

  const metadata = { title: name, description: description, media: link, issued_at: Number(Date.now().toString())};
  const deposit = parseNearAmount('0.1');

  await wallet.account().functionCall(nearConfig.contractId, 'nft_mint', {
      token_id: 'token-' + Date.now(),
      metadata,
      receiver_id: wallet.getAccountId()
  }, '200000000000000', deposit);

};

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
