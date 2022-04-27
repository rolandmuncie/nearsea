import * as nearAPI from "near-api-js";
import getConfig from "./config";

export const {
	utils: {
		format: {
			formatNearAmount, parseNearAmount
		}
	}
} = nearAPI;

export async function handleMint(wallet:any, name:string, description:string, link: string) {
    const nearConfig = getConfig("testnet");

    const metadata = { title: name, description: description, media: link, issued_at: Number(Date.now().toString())};
    const deposit = parseNearAmount('0.1');

    await wallet.account().functionCall(nearConfig.contractId, 'nft_mint', {
        token_id: 'token-' + Date.now(),
        metadata
    }, '200000000000000', deposit);

};
