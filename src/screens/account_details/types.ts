export type OverviewType = {
  address: string;
  withdrawalAddress: string;
};

export type BalanceType = {
  available: TokenUnit;
  delegate: TokenUnit;
  unbonding: TokenUnit;
  reward: TokenUnit;
  commission?: TokenUnit;
  total: TokenUnit;
};

export type OtherTokenType = {
  denom: string;
  available: TokenUnit;
  reward: TokenUnit;
  commission: TokenUnit;
};

export type RewardsType = {
  [value: string]: TokenUnit[];
};

type AccountAffiliatesType = {
  address: string;
  kind: string;
};

type WalletType = {
  account_address: string;
  address: string;
  balance: string;
  kind: string;
  state: string;
};
type AccountType = {
  address: string;
  affiliates: AccountAffiliatesType[];
  hash: string;
  kind: string[];
  wallets: string[];
};

export type AccountDetailState = {
  loading: boolean;
  exists: boolean;
  desmosProfile: DesmosProfile | null;
  accountAddress: string | null;
  overview: OverviewType;
  balance: BalanceType;
  otherTokens: {
    data: OtherTokenType[];
    count: number;
  };
  rewards: RewardsType;
  accountInfo: {
    address: string;
    account: AccountType | [];
    wallet: WalletType | [];
    transaction: [];
    walletOverview?: [];
    accountOverview?: [];
  };
};
