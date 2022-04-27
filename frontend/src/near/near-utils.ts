export function formatAccountId (accountId:any, len = 48) {
	if (accountId.length > len) {
		return accountId.substr(0, len - 3) + '...';
	}
	return accountId;
}
