import { Translate } from 'next-translate';

export type walletInfoReturnType = {
  title: any;
  value: string;
  isDetail?: boolean;
};

export type walletInfoType = (
  data: any,
  t: Translate
) => walletInfoReturnType[];

export const walletInfo: walletInfoType = (accountData, t) => [
  {
    title: t('Wallet address:'),
    value: accountData.address,
    isDetail: true,
  },
  {
    title: t('Account address:'),
    value: accountData.account_address,
    isDetail: true,
  },
  {
    title: t('Kind:'),
    value: accountData.kind,
  },
  {
    title: t('State:'),
    value: accountData.state,
  },
  {
    title: t('Balance:'),
    value: `${accountData.balance / 100000000} OVG`,
  },
];
