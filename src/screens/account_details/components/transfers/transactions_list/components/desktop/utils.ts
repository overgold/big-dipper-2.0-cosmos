export const columnsPaymentAndSystem:{
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'hash',
    width: 17,
  },
  {
    key: 'kind',
    width: 15,
  },
  {
    key: 'walletFrom',
    width: 15,
  },
  {
    key: 'walletTo',
    width: 15,
  },
  {
    key: 'amount',
    width: 18,
    align:'right'
  },
  {
    key: 'time',
    width: 10,
  },
  {
    key: 'block',
    width: 10,
  },
];
export const columnsWithdrawAndIssue:{
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'hash',
    width: 17,
  },
  {
    key: 'kind',
    width: 15,
  },
  {
    key: 'walletFrom',
    width: 15,
  },
  {
    key: 'wallet',
    width: 15,
  },
  {
    key: 'amount',
    width: 18,
    align:'right'
  },
  {
    key: 'time',
    width: 10,
  },
  {
    key: 'block',
    width: 10,
  },
];
