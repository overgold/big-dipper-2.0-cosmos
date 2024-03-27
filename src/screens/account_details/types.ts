export type OverviewType = {
  address: string;
  withdrawalAddress: string;
};

export type BalanceType = {
  regular: TokenUnit;
  staked: TokenUnit;
  steakForRansom: TokenUnit;
  stakeAmount: TokenUnit;
  rewardAmount: TokenUnit;
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

export type WalletType = {
  account_address: string;
  address: string;
  balance: string;
  kind: string;
  state: string;
};
export type AccountWalletsType = {
  address: string;
  kind: string;
  state: string;
  denom: string;
  balance: number;
};

export type AccountType = {
  address: string;
  affiliates: AccountAffiliatesType[];
  hash: string;
  kind: any;
  state: string;
  wallets: AccountWalletsType[];
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
  transferWallets: string[];
  accountInfo: {
    address: string;
    walletOverview?: WalletType | [];
    accountOverview?: AccountType | [];
  };
};
