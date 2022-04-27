import getConfig from "./config";

export async function loadItems(wallet:any)  {

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
