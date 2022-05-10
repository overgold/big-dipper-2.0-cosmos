export type BaseCategories =
  | 'bank'
  | 'crisis'
  | 'distribution'
  | 'governance'
  | 'slashing'
  | 'staking'
  | 'profiles'
  | 'ibc'
  | 'ibc-transfer'
  | 'authz'
  | 'feegrant'
  | 'vesting'
  | 'others'
  | 'banking'
  | 'wallets'
  | 'assets'
  | 'accounts';
export type CustomCategories = ''; // custom modules
export type Categories = BaseCategories | CustomCategories;
