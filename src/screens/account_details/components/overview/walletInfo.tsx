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
    title: t('balanceHead'),
    value: accountData.balance ? `${accountData.balance} OVG` : `0 OVG`,
  },
  {
    title: t('kindHead'),
    value: t(accountData.kind),
  },
  {
    title: t('walletAddressHead'),
    value: accountData.address,
    isDetail: true,
  },
  {
    title: t('stateHead'),
    value: t(accountData.state),
  },
  {
    title: t('accountAddressHead'),
    value: accountData.account_address,
    isDetail: true,
  },
];
